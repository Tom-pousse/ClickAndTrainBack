import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Player } from 'src/player/entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Player)
    private userRepository: Repository<Player>,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // IMPORTANT IL FAUT GARDER CE NOM DE METHODE
  async validate(payload: any): Promise<Player> {
    const { nom_pseudo } = payload;
    const user: Player = await this.userRepository.findOneBy({ nom_pseudo });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}

import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from 'src/player/entities/player.entity';
import { LoginDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,

    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { nom_pseudo, nom_password, nom_email } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(nom_password, salt);

    // création d'une entité user
    const user = this.playerRepository.create({
      nom_pseudo,
      nom_password: hashedPassword,
      nom_email,
      num_score: 0,
      // ajout de la valeur supplementaire
      num_click: 0,
      boo_admin: false,
      // ajout de acquire pour initialiser les valeur par defaut a la creation
      acquire: [
        {
          id_upgrade: 1,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 2,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 3,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 4,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 5,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 6,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 7,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 8,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 9,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
        {
          id_upgrade: 10,
          boo_status: true,
          num_enable: 0,
          num_value_upgrade: 0,
        },
      ],
    });
    console.log(user);

    try {
      // enregistrement de l'entité user
      const createdUser = await this.playerRepository.save(user);
      delete createdUser.nom_password;
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        console.log('error');

        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { nom_pseudo, nom_password } = loginDto;
    const user = await this.playerRepository.findOneBy({ nom_pseudo });

    if (user && (await bcrypt.compare(nom_password, user.nom_password))) {
      const payload = { nom_pseudo };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Ces identifiants ne sont pas reconnus.');
    }
  }
}

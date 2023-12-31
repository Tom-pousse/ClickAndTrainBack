import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import {
  Repository,
  SelectQueryBuilder,
  createQueryBuilder,
  getManager,
  getRepository,
} from 'typeorm';
import { log } from 'console';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  findAll() {
    return this.playerRepository.find();
  }

  async findOne(id: number) {
    try {
      const found = await this.playerRepository.findOneBy({ id_players: id });

      if (!found) {
        throw new NotFoundException(`Le joueur n'a pas été trouvé`);
      }
      return found;
    } catch (error) {
      throw new InternalServerErrorException(
        `erreur lors de la recherche du joueur : ${error.message}`,
      );
    }
  }

  async update(updatePlayerDto: UpdatePlayerDto) {
    try {
      const user = await this.findOne(updatePlayerDto['id_players']);
      const nom = user.nom_pseudo;
      const email = user.nom_email;
      const updatedPlayer = this.playerRepository.merge(user, updatePlayerDto);
      if (
        updatedPlayer.nom_email !== email ||
        updatedPlayer.nom_pseudo !== nom
      ) {
        updatedPlayer.nom_email = email;
        updatedPlayer.nom_pseudo = nom;

        const result = await this.playerRepository.save(updatedPlayer);
      }
      const result = await this.playerRepository.save(updatedPlayer);
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        ` erreur de la mise à jour : ${error.message}`,
      );
    }
  }

  async remove(player: Player) {
    try {
      const response = await this.playerRepository.remove(player);

      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        `erreur de la suppression : ${error.message}`,
      );
    }
  }

  async classement(): Promise<Player[]> {
    return this.playerRepository
      .createQueryBuilder('players')
      .orderBy('players.num_score', 'DESC')
      .getMany();
  }
}

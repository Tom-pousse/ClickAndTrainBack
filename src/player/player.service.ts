import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findOneBy({ id_players: id });
  }

  async update(updatePlayerDto: UpdatePlayerDto) {
    try {
      const result = await this.playerRepository.save(updatePlayerDto);
      if (result) {
        console.log('update bdd ppppppppppppppppp', updatePlayerDto);
      }

      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        ` erreur de la mise à jour : ${error.message}`,
      );
    }
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.playerRepository.remove(found);
    return `Le joueur: ${found.nom_pseudo} à bien été supprimé.`;
  }
}

import { Injectable } from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findOneBy({ id_players: id });
  }

  async update(id_players: number, updatePlayerDto: UpdatePlayerDto) {
    const playerName = await this.findOne(id_players);
    // console.log(playerName);
    const playerModif = this.playerRepository.merge(
      playerName,
      updatePlayerDto,
    );
    // console.log(playerModif);
    const result = await this.playerRepository.save(playerModif);
    // console.log(playerModif);
    return result;
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.playerRepository.remove(found);
    return `Le joueur: ${found.nom_pseudo} à bien été supprimé.`;
  }
}

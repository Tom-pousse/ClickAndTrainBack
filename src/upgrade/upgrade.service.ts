import { Injectable } from '@nestjs/common';
import { CreateUpgradeDto } from './dto/create-upgrade.dto';
import { UpdateUpgradeDto } from './dto/update-upgrade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Upgrade } from './entities/upgrade.entity';
import { Player } from 'src/player/entities/player.entity';

@Injectable()
export class UpgradeService {
  constructor(
    @InjectRepository(Upgrade) private upgradeRepository: Repository<Upgrade>,
  ) {}

  create(createUpgradeDto: CreateUpgradeDto) {
    return 'This action adds a new upgrade';
  }

  findAll() {
    return this.upgradeRepository.find();
  }

  findOne(id: number) {
    return this.upgradeRepository.findOneBy({ id_upgrade: id });
  }

  async update(id_players: number, updateUpgradeDto: UpdateUpgradeDto) {
    const playerName = await this.findOne(id_players);
    // console.log(playerName);
    const playerModif = this.upgradeRepository.merge(
      playerName,
      updateUpgradeDto,
    );
    // console.log(playerModif);
    const result = await this.upgradeRepository.save(playerModif);
    // console.log(playerModif);
    return result;
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.upgradeRepository.remove(found);
    return `Le joueur: ${found.nom_name} à bien été supprimé.`;
  }
}

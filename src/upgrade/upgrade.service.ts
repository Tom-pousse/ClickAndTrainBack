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

  findAll() {
    return this.upgradeRepository.find();
  }

  findOne(id: number) {
    return this.upgradeRepository.findOneBy({ id_upgrade: id });
  }
}

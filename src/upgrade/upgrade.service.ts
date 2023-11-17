import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Upgrade } from './entities/upgrade.entity';

@Injectable()
export class UpgradeService {
  constructor(
    @InjectRepository(Upgrade) private upgradeRepository: Repository<Upgrade>,
  ) {}

  findAll() {
    return this.upgradeRepository.find();
  }
}

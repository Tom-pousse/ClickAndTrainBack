import { Injectable } from '@nestjs/common';
import { CreateAcquireDto } from './dto/create-acquire.dto';
import { UpdateAcquireDto } from './dto/update-acquire.dto';
import { Acquire } from './entities/acquire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AcquireService {
  constructor(
    @InjectRepository(Acquire) private acquireRepository: Repository<Acquire>,
  ) {}

  async create(createAcquireDto: CreateAcquireDto) {
    const upgradePerso = this.acquireRepository.create(createAcquireDto);
    const result = await this.acquireRepository.save(upgradePerso);
    return result;
  }

  findAll() {
    return this.acquireRepository.find();
  }

  findOne(id: number) {
    return this.acquireRepository.findOneBy({ id_players: id });
  }

  async update(updateAcquireDto: UpdateAcquireDto) {
    const result = await this.acquireRepository.save(updateAcquireDto);
    return result;
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.acquireRepository.remove(found);
    return `Le joueur: ${found.id_players} à bien été supprimé.`;
  }
}

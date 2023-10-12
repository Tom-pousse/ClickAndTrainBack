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

  async update(id_players: number, updateAcquireDto: UpdateAcquireDto) {
    const playerName = await this.findOne(id_players);
    // console.log(playerName);
    const playerModif = this.acquireRepository.merge(
      playerName,
      updateAcquireDto,
    );
    // console.log(playerModif);
    const result = await this.acquireRepository.save(playerModif);
    // console.log(playerModif);
    return result;
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.acquireRepository.remove(found);
    return `Le joueur: ${found.id_players} à bien été supprimé.`;
  }
}

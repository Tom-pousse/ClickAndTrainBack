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

  create(createAcquireDto: CreateAcquireDto) {
    return 'This action adds a new acquire';
  }

  findAll() {
    return `This action returns all acquire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acquire`;
  }

  update(id: number, updateAcquireDto: UpdateAcquireDto) {
    return `This action updates a #${id} acquire`;
  }

  remove(id: number) {
    return `This action removes a #${id} acquire`;
  }
}

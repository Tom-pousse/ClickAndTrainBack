import { Injectable } from '@nestjs/common';
import { CreateEnableDto } from './dto/create-enable.dto';
import { UpdateEnableDto } from './dto/update-enable.dto';
import { Enable } from './entities/enable.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnableService {
  constructor(
    @InjectRepository(Enable) private enableRepository: Repository<Enable>,
  ) {}

  create(createEnableDto: CreateEnableDto) {
    return 'This action adds a new enable';
  }

  findAll() {
    return `This action returns all enable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enable`;
  }

  update(id: number, updateEnableDto: UpdateEnableDto) {
    return `This action updates a #${id} enable`;
  }

  remove(id: number) {
    return `This action removes a #${id} enable`;
  }
}

import { Injectable } from '@nestjs/common';
import { Enable } from './entities/enable.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnableService {
  constructor(
    @InjectRepository(Enable) private enableRepository: Repository<Enable>,
  ) {}

  findAll() {
    return this.enableRepository.find();
  }
}

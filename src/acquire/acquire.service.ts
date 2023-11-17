import { Injectable } from '@nestjs/common';
import { Acquire } from './entities/acquire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AcquireService {
  constructor(
    @InjectRepository(Acquire) private acquireRepository: Repository<Acquire>,
  ) {}

  findAll() {
    return this.acquireRepository.find();
  }
}

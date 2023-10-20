import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Param } from './entities/param.entity';

@Injectable()
export class ParamService {
  constructor(
    // Injecte le référentiel (repository) Param
    @InjectRepository(Param)
    private paramRepository: Repository<Param>,
  ) {}

  async getAllParam(): Promise<Param[]> {
    return this.paramRepository.find();
  }
}

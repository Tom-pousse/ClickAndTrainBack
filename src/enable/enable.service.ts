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

  findAll() {
    return this.enableRepository.find();
  }

  async update(updateEnableDto: UpdateEnableDto) {
    const result = await this.enableRepository.save(updateEnableDto);
    return result;
  }
}

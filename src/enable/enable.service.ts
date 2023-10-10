import { Injectable } from '@nestjs/common';
import { CreateEnableDto } from './dto/create-enable.dto';
import { UpdateEnableDto } from './dto/update-enable.dto';

@Injectable()
export class EnableService {
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

import { Injectable } from '@nestjs/common';
import { CreateAcquireDto } from './dto/create-acquire.dto';
import { UpdateAcquireDto } from './dto/update-acquire.dto';

@Injectable()
export class AcquireService {
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

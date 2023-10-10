import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcquireService } from './acquire.service';
import { CreateAcquireDto } from './dto/create-acquire.dto';
import { UpdateAcquireDto } from './dto/update-acquire.dto';

@Controller('acquire')
export class AcquireController {
  constructor(private readonly acquireService: AcquireService) {}

  @Post()
  create(@Body() createAcquireDto: CreateAcquireDto) {
    return this.acquireService.create(createAcquireDto);
  }

  @Get()
  findAll() {
    return this.acquireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acquireService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcquireDto: UpdateAcquireDto) {
    return this.acquireService.update(+id, updateAcquireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acquireService.remove(+id);
  }
}

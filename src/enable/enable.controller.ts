import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnableService } from './enable.service';
import { CreateEnableDto } from './dto/create-enable.dto';
import { UpdateEnableDto } from './dto/update-enable.dto';

@Controller('enable')
export class EnableController {
  constructor(private readonly enableService: EnableService) {}

  @Post()
  create(@Body() createEnableDto: CreateEnableDto) {
    return this.enableService.create(createEnableDto);
  }

  @Get()
  findAll() {
    return this.enableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnableDto: UpdateEnableDto) {
    return this.enableService.update(+id, updateEnableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enableService.remove(+id);
  }
}

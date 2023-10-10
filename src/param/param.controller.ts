import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamService } from './param.service';
import { CreateParamDto } from './dto/create-param.dto';
import { UpdateParamDto } from './dto/update-param.dto';

@Controller('param')
export class ParamController {
  constructor(private readonly paramService: ParamService) {}

  @Post()
  create(@Body() createParamDto: CreateParamDto) {
    return this.paramService.create(createParamDto);
  }

  @Get()
  findAll() {
    return this.paramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParamDto: UpdateParamDto) {
    return this.paramService.update(+id, updateParamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramService.remove(+id);
  }
}

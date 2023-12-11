import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ParamService } from './param.service';
import { CreateParamDto } from './dto/create-param.dto';
import { UpdateParamDto } from './dto/update-param.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';

@Controller('param')
export class ParamController {
  constructor(private readonly paramService: ParamService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.paramService.getAllParam();
  }
}

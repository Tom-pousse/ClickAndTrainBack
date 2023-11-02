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
import { EnableService } from './enable.service';
import { CreateEnableDto } from './dto/create-enable.dto';
import { UpdateEnableDto } from './dto/update-enable.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';
import { Enable } from './entities/enable.entity';

@Controller('enable')
export class EnableController {
  constructor(private enableService: EnableService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.enableService.findAll();
  }
}

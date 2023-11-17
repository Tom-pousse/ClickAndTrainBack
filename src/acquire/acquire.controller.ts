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
import { AcquireService } from './acquire.service';
import { CreateAcquireDto } from './dto/create-acquire.dto';
import { UpdateAcquireDto } from './dto/update-acquire.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';
import { log } from 'console';

@Controller('acquire')
export class AcquireController {
  constructor(private acquireService: AcquireService) {}

  @Get('profil')
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.acquireService.findAll();
  }
}

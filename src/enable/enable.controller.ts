import { Controller, Get, UseGuards } from '@nestjs/common';
import { EnableService } from './enable.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';

@Controller('enable')
export class EnableController {
  constructor(private enableService: EnableService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.enableService.findAll();
  }
}

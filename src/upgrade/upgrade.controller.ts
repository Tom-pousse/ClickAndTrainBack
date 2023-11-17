import { Controller, Get, UseGuards } from '@nestjs/common';
import { UpgradeService } from './upgrade.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';

@Controller('upgrade')
export class UpgradeController {
  constructor(private readonly upgradeService: UpgradeService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.upgradeService.findAll();
  }
}

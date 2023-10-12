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
import { UpgradeService } from './upgrade.service';
import { CreateUpgradeDto } from './dto/create-upgrade.dto';
import { UpdateUpgradeDto } from './dto/update-upgrade.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Player } from 'src/player/entities/player.entity';

@Controller('upgrade')
export class UpgradeController {
  constructor(private readonly upgradeService: UpgradeService) {}

  @Post()
  create(@Body() createUpgradeDto: CreateUpgradeDto) {
    return this.upgradeService.create(createUpgradeDto);
  }

  @Get('a')
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.upgradeService.findAll();
  }

  @Get()
  @UseGuards(AuthGuard())
  findOne(@GetUser() player: Player) {
    return this.upgradeService.findOne(player.id_players);
  }

  @Patch()
  @UseGuards(AuthGuard())
  update(@Body() updatePlayerDto: UpdateUpgradeDto, @GetUser() player: Player) {
    // console.log('maj', updatePlayerDto);
    // log pour le score
    return this.upgradeService.update(player.id_players, updatePlayerDto);
  }

  @Delete()
  remove(@Param('id') id: string, @GetUser() player: Player) {
    return this.upgradeService.remove(player.id_players);
  }
}

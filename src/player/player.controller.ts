import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { AuthGuard } from '@nestjs/passport';
import { Player } from './entities/player.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('jeu')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.playerService.findAll();
  }

  @Get()
  findOne(@GetUser() player: Player) {
    return this.playerService.findOne(player.id_players);
  }

  @Patch()
  @UseGuards(AuthGuard())
  update(@Body() updatePlayerDto: UpdatePlayerDto, @GetUser() player: Player) {
    console.log('maj', updatePlayerDto);

    return this.playerService.update(player.id_players, updatePlayerDto);
  }

  @Delete()
  remove(@Param('id') id: string, @GetUser() player: Player) {
    return this.playerService.remove(player.id_players);
  }
}

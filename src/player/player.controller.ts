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

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('accueil')
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.playerService.findAll();
  }

  @Get('profil')
  @UseGuards(AuthGuard())
  findOne(@GetUser() player: Player) {
    return this.playerService.findOne(player.id_players);
  }

  @Patch('jeu')
  @UseGuards(AuthGuard())
  update(@Body() updatePlayerDto: UpdatePlayerDto, @GetUser() player: Player) {
    console.log('maj', updatePlayerDto);
    // log pour le score
    return this.playerService.update(updatePlayerDto);
  }

  @Delete()
  remove(@Param('id') id: string, @GetUser() player: Player) {
    return this.playerService.remove(player.id_players);
  }
}

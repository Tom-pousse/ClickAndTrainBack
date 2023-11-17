import {
  Controller,
  Get,
  Body,
  Patch,
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
  // commentaire
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

  @Delete('profil')
  @UseGuards(AuthGuard())
  remove(@GetUser() player: Player) {
    console.log('mon joueur delete', player);

    return this.playerService.remove(player);
  }
}

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

  @Get('classement')
  @UseGuards(AuthGuard())
  async getPlayerRankings(): Promise<Player[]> {
    return await this.playerService.classement();
  }

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
    return this.playerService.update(updatePlayerDto);
  }

  @Delete('profil')
  @UseGuards(AuthGuard())
  remove(@GetUser() player: Player) {
    return this.playerService.remove(player);
  }
}

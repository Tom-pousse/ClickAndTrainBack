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
import { Acquire } from './entities/acquire.entity';
import { PlayerService } from 'src/player/player.service';

@Controller('acquire')
export class AcquireController {
  constructor(private readonly acquireService: AcquireService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(
    @Body() createAcquireDto: CreateAcquireDto,
    @GetUser() player: Player,
  ) {
    return this.acquireService.create(createAcquireDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.acquireService.findAll();
  }

  @Get('profil')
  @UseGuards(AuthGuard())
  findOne(@GetUser() player: Player) {
    return this.acquireService.findOne(player.id_players);
  }

  @Patch()
  @UseGuards(AuthGuard())
  update(@Body() updatePlayerDto: UpdateAcquireDto, @GetUser() player: Player) {
    // console.log('maj', updatePlayerDto);
    // log pour le score
    return this.acquireService.update(player.id_players, updatePlayerDto);
  }

  @Delete()
  remove(@Param('id') id: string, @GetUser() player: Player) {
    return this.acquireService.remove(player.id_players);
  }
}

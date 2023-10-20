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

  @Post()
  @UseGuards(AuthGuard())
  create(
    @Body() createAcquireDto: CreateAcquireDto,
    @GetUser() player: Player,
  ) {
    console.log(createAcquireDto);

    return this.acquireService.create(createAcquireDto);
  }

  @Get('profil')
  @UseGuards(AuthGuard())
  findAll(@GetUser() player: Player) {
    return this.acquireService.findAll();
  }

  @Get('profil')
  @UseGuards(AuthGuard())
  findOne(@GetUser() player: Player) {
    return this.acquireService.findOne(player.id_players);
  }

  @Patch('profil')
  @UseGuards(AuthGuard())
  update(@Body() updatePlayerDto: UpdateAcquireDto, @GetUser() player: Player) {
    console.log('maj', updatePlayerDto);
    return this.acquireService.update(updatePlayerDto);
  }

  @Delete()
  remove(@Param('id') id: string, @GetUser() player: Player) {
    return this.acquireService.remove(player.id_players);
  }
}

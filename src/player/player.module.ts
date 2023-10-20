import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PassportModule } from '@nestjs/passport';
import { Enable } from 'src/enable/entities/enable.entity';
import { EnableModule } from 'src/enable/enable.module';
import { ParamModule } from 'src/param/param.module';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    TypeOrmModule.forFeature([Player]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}

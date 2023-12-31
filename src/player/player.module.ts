import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    TypeOrmModule.forFeature([Player]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}

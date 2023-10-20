import { Module } from '@nestjs/common';
import { ParamService } from './param.service';
import { ParamController } from './param.controller';
import { Param } from './entities/param.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { EnableModule } from 'src/enable/enable.module';
import { PlayerModule } from 'src/player/player.module';
import { Enable } from 'src/enable/entities/enable.entity';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Param]),
  ],
  controllers: [ParamController],
  providers: [ParamService],
})
export class ParamModule {}

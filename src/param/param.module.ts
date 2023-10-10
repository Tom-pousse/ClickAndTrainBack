import { Module } from '@nestjs/common';
import { ParamService } from './param.service';
import { ParamController } from './param.controller';
import { Param } from './entities/param.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [TypeOrmModule.forFeature([Param])],
  controllers: [ParamController],
  providers: [ParamService],
})
export class ParamModule {}

import { Module } from '@nestjs/common';
import { AcquireService } from './acquire.service';
import { AcquireController } from './acquire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acquire } from './entities/acquire.entity';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [TypeOrmModule.forFeature([Acquire])],
  controllers: [AcquireController],
  providers: [AcquireService],
})
export class AcquireModule {}

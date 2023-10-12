import { Module } from '@nestjs/common';
import { AcquireService } from './acquire.service';
import { AcquireController } from './acquire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acquire } from './entities/acquire.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    TypeOrmModule.forFeature([Acquire]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AcquireController],
  providers: [AcquireService],
})
export class AcquireModule {}

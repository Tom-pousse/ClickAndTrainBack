import { Module } from '@nestjs/common';
import { EnableService } from './enable.service';
import { EnableController } from './enable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enable } from './entities/enable.entity';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [TypeOrmModule.forFeature([Enable])],
  controllers: [EnableController],
  providers: [EnableService],
})
export class EnableModule {}

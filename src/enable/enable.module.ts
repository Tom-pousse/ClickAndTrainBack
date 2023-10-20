import { DynamicModule, Module } from '@nestjs/common';
import { EnableService } from './enable.service';
import { EnableController } from './enable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enable } from './entities/enable.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    TypeOrmModule.forFeature([Enable]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [EnableController],
  providers: [EnableService],
})
export class EnableModule {}

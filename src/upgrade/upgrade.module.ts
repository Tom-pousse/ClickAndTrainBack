import { Module } from '@nestjs/common';
import { UpgradeService } from './upgrade.service';
import { UpgradeController } from './upgrade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upgrade } from './entities/upgrade.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  // import de type orm indivuduel a chaque module
  imports: [
    TypeOrmModule.forFeature([Upgrade]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UpgradeController],
  providers: [UpgradeService],
})
export class UpgradeModule {}

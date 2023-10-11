import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnableModule } from './enable/enable.module';
import { UpgradeModule } from './upgrade/upgrade.module';
import { ParamModule } from './param/param.module';
import { AcquireModule } from './acquire/acquire.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acquire } from './acquire/entities/acquire.entity';
import { Enable } from './enable/entities/enable.entity';
import { Param } from './param/entities/param.entity';
import { Upgrade } from './upgrade/entities/upgrade.entity';
import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './player/player.module';
import { Player } from './player/entities/player.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),

    PlayerModule,
    EnableModule,
    UpgradeModule,
    ParamModule,
    AcquireModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Acquire, Enable, Param, Player, Upgrade],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcquireModule } from './acquire/acquire.module';
import { PlayerModule } from './player/player.module';
import { EnableModule } from './enable/enable.module';
import { ParamModule } from './param/param.module';
import { ConfigModule } from '@nestjs/config';
import { Acquire } from './acquire/entities/acquire.entity';
import { Enable } from './enable/entities/enable.entity';
import { Param } from './param/entities/param.entity';
import { Player } from './player/entities/player.entity';
import { Upgrade } from './upgrade/entities/upgrade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // import du .env
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    AcquireModule,
    PlayerModule,
    EnableModule,
    ParamModule,
    // import de typeOrmModule.forRoot({info du .env})
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // entities
      entities: [Acquire, Enable, Param, Player, Upgrade],
      // synchronize à false pour evité de généré des info en auto
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

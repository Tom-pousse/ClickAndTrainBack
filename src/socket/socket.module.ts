import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { AcquireModule } from 'src/acquire/acquire.module';

import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from 'src/player/player.module';
import { EnableModule } from 'src/enable/enable.module';

@Module({
  imports: [
    PassportModule,
    PlayerModule,
    EnableModule,
    AcquireModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [],
  providers: [SocketGateway],
})
export class SocketModule {}

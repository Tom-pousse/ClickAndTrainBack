import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [PlayerModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [],
  providers: [SocketGateway],
})
export class SocketModule {}

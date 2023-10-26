import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { AcquireService } from 'src/acquire/acquire.service';

import { EnableService } from 'src/enable/enable.service';
import { PlayerService } from 'src/player/player.service';

import { Player } from 'src/player/entities/player.entity';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private playerService: PlayerService,
    private acquireService: AcquireService,
    private enableService: EnableService,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connecté: ${client.id}`);
  }

  // création d'un message creatAcquire

  // au clickzone pour save pts instant
  @SubscribeMessage('clickZone')
  envoieParClickZone(client: Socket, data: Player) {
    // je reçoie
    // console.log(data);

    const updatedPlayer = this.playerService.update(data);
    // lance ma sauvegarde

    if (updatedPlayer) {
      // si ma sauvegarde ok =>
      client.emit('clickZone', data);
    } else {
      // si error
      client.emit('clickZoneError', 'Échec de la mise à jour du joueur');
    }
  }

  @SubscribeMessage('upZone')
  envoieParUpzone(client: Socket, data: Player) {
    // je reçoie
    // console.log(data);

    const updatedPlayer = this.playerService.update(data);
    // lance ma sauvegarde

    if (updatedPlayer) {
      // si ma sauvegarde ok =>
      client.emit('upZone', data);
    } else {
      // si error
      client.emit('upZone', 'Échec de la mise à jour du joueur');
    }
  }
}

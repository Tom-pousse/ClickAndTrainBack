import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PlayerService } from 'src/player/player.service';
import { Player } from 'src/player/entities/player.entity';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(private playerService: PlayerService) {}

  handleConnection(client: Socket) {
    console.log(`Client connecté: ${client.id}`);
  }

  // au clickzone pour save pts instant
  @SubscribeMessage('clickZone')
  envoieParClickZone(client: Socket, data: Player) {
    // je reçoie
    // console.log('bien recu', data);

    const updatedPlayer = this.playerService.update(data);
    // lance ma sauvegarde

    if (updatedPlayer) {
      // console.log('je renvoie', updatedPlayer);

      // si ma sauvegarde ok =>
      client.emit('clickZone', data);
    } else {
      // si error
      client.emit('clickZoneError', 'Échec de la mise à jour du joueur');
    }
  }
}

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PlayerService } from 'src/player/player.service';
import { Player } from 'src/player/entities/player.entity';

@WebSocketGateway({
  // modif pour postamm
  // cors: { origin: ['http://localhost:4200'] },
  // fonction pour déterminer si l'origine est autorisée
  cors: {
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:4200'];

      // Vérifier si l'origine est définie avant de la traiter
      if (!origin) {
        callback(new Error('Origine non définie pour WebSocket'));
        return;
      }

      const isAllowed = allowedOrigins.some((allowedOrigin) =>
        origin.startsWith(allowedOrigin),
      );

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Origine non autorisée pour WebSocket'));
      }
    },
  },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(private playerService: PlayerService) {}

  handleConnection(client: Socket) {
    console.log(`Client connecté: ${client.id}`);
  }

  //pour save
  @SubscribeMessage('clickZone')
  envoieParClickZone(client: Socket, data: Player) {
    console.log('bien recu', data, client.connected);

    const updatedPlayer = this.playerService.update(data);
    // lance ma sauvegarde

    if (updatedPlayer) {
      console.log('je renvoie', updatedPlayer);
      client.emit('clickZone', data);
    } else {
      client.emit('clickZoneError', 'Échec de la mise à jour du joueur');
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}

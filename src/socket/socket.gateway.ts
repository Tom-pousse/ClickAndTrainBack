import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
} from '@nestjs/websockets';
import { error, log } from 'console';
import { Server, Socket } from 'socket.io';
import { AcquireService } from 'src/acquire/acquire.service';
import { CreateAcquireDto } from 'src/acquire/dto/create-acquire.dto';
import { UpdateAcquireDto } from 'src/acquire/dto/update-acquire.dto';
import { UpdateEnableDto } from 'src/enable/dto/update-enable.dto';
import { EnableService } from 'src/enable/enable.service';
import { PlayerService } from 'src/player/player.service';
import { SocketService } from './socket.service';
import { Player } from 'src/player/entities/player.entity';
import { Acquire } from 'src/acquire/entities/acquire.entity';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly socketService: SocketService,
    private playerService: PlayerService,
    private acquireService: AcquireService,
    private enableService: EnableService,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connecté: ${client.id}`);
  }

  // création d'un message creatAcquire
  @SubscribeMessage('ClickCreatedUpgrade')
  async handleCreateAcquire(client: Socket, data: Acquire) {
    const result = await this.acquireService.create(data);

    this.server.emit('ClickCreatedUpgrade', data);
  }

  // au clickzone pour save pts instant
  @SubscribeMessage('clickZone')
  handleEventFromClient(client: Socket, data: Player) {
    // je reçoie
    console.log(data);

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
  //
  //
  @SubscribeMessage('ClickUpgrade')
  handleUpdateAcquire(client: Socket, data: Acquire) {
    const updatedAcquire = this.acquireService.update(data);
    if (updatedAcquire) {
      client.emit('ClickUpgrade', data);
    } else {
      return error;
    }
  }
  //

  @SubscribeMessage('update-enable')
  handleUpdateEnable(client: Socket, enable: UpdateEnableDto) {
    const updatedEnable = this.enableService.update(enable);
    if (updatedEnable) {
      client.emit('upgrade-enable', updatedEnable);
    } else {
      return error;
    }
  }

  @SubscribeMessage('message')
  handleEvent(@ConnectedSocket() client: Socket, data: string) {
    client.emit('message', client.id, data);
    console.log('pouet');
  }

  handleDisconnect(client: Socket) {
    if (client.disconnected === false) {
      console.log(
        'La connexion à socketio est interrompue de manière inattendue.',
      );
    }
    console.log('la connexion est fermer volontairement par', client.id);
  }
}

import { Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class SocketService {
  private io: Server;

  public initIo(server: Server) {
    this.io = server;
  }

  public emitToClient(event: string, data: any, client: Socket) {
    client.emit(event, data);
  }

  public listenForEvent(eventName: string, handler: (data: any) => void) {
    this.io.on('connection', (socket: Socket) => {
      socket.on(eventName, (data) => {
        handler(data);
      });
    });
  }
}

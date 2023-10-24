import * as http from 'http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Ajoutez 'api' après localhost:3000/
  app.setGlobalPrefix('api');
  // Indiquez à NestJs de vérifier les entrées avec class-validator
  app.useGlobalPipes(new ValidationPipe());
  // Configure les options CORS pour autoriser les requêtes depuis http://localhost:4200
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };
  // app.useWebSocketAdapter(new IoAdapter(app));
  app.enableCors(corsOptions);

  await app.listen(3000);
}

bootstrap();

// app.useWebSocketAdapter(new SocketConfig());

// // Initialisez le service Socket.IO
// const server = app.getHttpServer(); // Récupérez le serveur HTTP de l'application
// const socketService = app.get(SocketService);
// socketService.initIo(new Server(server)); // Initialisez le service avec le serveur

// // listen doit rester en dernier
// await app.listen(3000);

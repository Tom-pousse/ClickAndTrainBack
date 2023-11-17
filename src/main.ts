import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Ajoutez 'api' après localhost:3000/
  app.setGlobalPrefix('api');
  // Indiquez à NestJs de vérifier les entrées avec class-validator et renvoie les message perso
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

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ajoute  api après localhost:3000/
  app.setGlobalPrefix('api'),
    //indique à NestJs qu'il va devoir checker les entrées avec class-validator
    app.useGlobalPipes(new ValidationPipe());
  //permet d'utiliser cors pour lier front et back
  app.enableCors();

  // listen doit rester dernier
  await app.listen(3000);
}
bootstrap();

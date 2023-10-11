import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Player } from 'src/player/entities/player.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): Player => {
    const req = ctx.switchToHttp().getRequest();
    return req.user; // NE PAS RENOMMER
    // c'est toujours la propriété user de req que l'on retourne
  },
);

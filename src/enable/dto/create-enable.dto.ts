import { IsBoolean, IsIn, IsNotEmpty } from 'class-validator';

export class CreateEnableDto {
  id_players: number;

  id_param: number;

  boo_status: boolean;
}

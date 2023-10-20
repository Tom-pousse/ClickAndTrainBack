import { IsBoolean, IsIn, IsNotEmpty } from 'class-validator';

export class CreateEnableDto {
  id_players: number;

  id_param: number;

  nom_label: string;

  boo_status: boolean;
}

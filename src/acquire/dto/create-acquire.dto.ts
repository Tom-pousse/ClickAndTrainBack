import { IsBoolean, IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAcquireDto {
  @IsNotEmpty()
  id_players: number;
  @IsNotEmpty()
  id_upgrade: number;
  @IsNotEmpty()
  nom_name: string;
  @IsNotEmpty()
  num_cost: number;
  @IsNotEmpty()
  num_value: number;
  @IsNotEmpty()
  num_lvl: number;
}

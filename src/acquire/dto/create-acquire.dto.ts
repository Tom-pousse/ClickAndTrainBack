import { IsBoolean, IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAcquireDto {
  @IsNotEmpty()
  id_players: number;
  @IsNotEmpty()
  id_upgrade: number;

  @IsNotEmpty()
  num_lvl: number;
}

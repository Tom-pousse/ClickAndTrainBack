import { IsInt, IsNotEmpty, Matches } from 'class-validator';

export class CreateAcquireDto {
  @IsInt()
  @IsNotEmpty()
  id_players: number;

  @IsInt()
  @IsNotEmpty()
  id_upgrade: number;

  @IsInt()
  @IsNotEmpty()
  num_lvl: number;
}

import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateEnableDto {
  @IsNotEmpty()
  @IsInt()
  id_players: number;
  @IsNotEmpty()
  @IsInt()
  id_param: number;
  @IsNotEmpty()
  @IsBoolean({ message: 'La valeur doit être un boolean.' })
  boo_status: boolean;
}

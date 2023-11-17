import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateParamDto {
  @IsInt()
  @IsNotEmpty()
  id_param: number;
  @IsString()
  @IsNotEmpty()
  nom_label: string;
  @IsNotEmpty()
  @IsBoolean({ message: 'La valeur doit être un boolean.' })
  boo_status: boolean;
}

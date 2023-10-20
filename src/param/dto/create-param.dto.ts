import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParamDto {
  id_param: number;
  @IsString()
  @IsNotEmpty()
  nom_label: string;

  boo_status: boolean;
}

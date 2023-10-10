import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParamDto {
  @IsString()
  @IsNotEmpty()
  nom_label: string;
}

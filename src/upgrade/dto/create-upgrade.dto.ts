import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUpgradeDto {
  // supr de la valeur num_lvl
  @IsString()
  @IsNotEmpty()
  nom_name: string;

  @IsNotEmpty()
  @IsInt()
  @IsNotEmpty()
  num_cost: number;

  @IsNotEmpty()
  @IsInt()
  @IsNotEmpty()
  num_value: number;
}

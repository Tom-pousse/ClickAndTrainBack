import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreateUpgradeDto {
  // supr de la valeur num_lvl
  @IsString()
  @IsNotEmpty()
  nom_name: string;

  @IsPositive()
  @Min(0)
  @IsNotEmpty()
  num_cost: number;

  @IsPositive()
  @Min(0)
  @IsNotEmpty()
  num_value: number;
}

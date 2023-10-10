import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreateUpgradeDto {
  @IsPositive()
  @Min(0)
  @IsInt()
  @IsNotEmpty()
  num_level: number;

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

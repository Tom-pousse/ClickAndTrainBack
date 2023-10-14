import {
  IsBoolean,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateAcquireDto {
  @IsBoolean()
  @IsNotEmpty()
  @IsIn([true, false])
  boo_status: boolean;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  num_enable: number;

  // ajout de la valeur supplementaire
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  num_value_upgrade: number;
}

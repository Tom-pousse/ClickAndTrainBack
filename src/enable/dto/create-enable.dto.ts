import { IsBoolean, IsIn, IsNotEmpty } from 'class-validator';

export class CreateEnableDto {
  @IsBoolean()
  @IsNotEmpty()
  @IsIn([true, false])
  boo_status: boolean;
}

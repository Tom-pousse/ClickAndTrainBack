import { PartialType } from '@nestjs/mapped-types';
import { CreateAcquireDto } from './create-acquire.dto';

export class UpdateAcquireDto extends PartialType(CreateAcquireDto) {}

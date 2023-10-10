import { PartialType } from '@nestjs/mapped-types';
import { CreateEnableDto } from './create-enable.dto';

export class UpdateEnableDto extends PartialType(CreateEnableDto) {}

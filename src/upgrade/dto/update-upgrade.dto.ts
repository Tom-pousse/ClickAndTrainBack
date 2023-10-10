import { PartialType } from '@nestjs/mapped-types';
import { CreateUpgradeDto } from './create-upgrade.dto';

export class UpdateUpgradeDto extends PartialType(CreateUpgradeDto) {}

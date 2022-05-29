import { PartialType } from '@nestjs/mapped-types';
import { CreateCoderDto } from './create-coder.dto';

export class UpdateCoderDto extends PartialType(CreateCoderDto) {
  id: number;
}

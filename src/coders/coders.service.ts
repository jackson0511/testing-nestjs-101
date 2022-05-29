import { Injectable } from '@nestjs/common';
import { CreateCoderDto } from './dto/create-coder.dto';
import { UpdateCoderDto } from './dto/update-coder.dto';

@Injectable()
export class CodersService {
  create(createCoderDto: CreateCoderDto) {
    return 'This action adds a new coder';
  }

  findAll() {
    return `This action returns all coders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coder`;
  }

  update(id: number, updateCoderDto: UpdateCoderDto) {
    return `This action updates a #${id} coder`;
  }

  remove(id: number) {
    return `This action removes a #${id} coder`;
  }
}

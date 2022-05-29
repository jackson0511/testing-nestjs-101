import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SupportersService } from './supporters.service';
import { CreateSupporterDto } from './dto/create-supporter.dto';
import { UpdateSupporterDto } from './dto/update-supporter.dto';

@Controller()
export class SupportersController {
  constructor(private readonly supportersService: SupportersService) {}

  @MessagePattern('createSupporter')
  create(@Payload() createSupporterDto: CreateSupporterDto) {
    return this.supportersService.create(createSupporterDto);
  }

  @MessagePattern('findAllSupporters')
  findAll() {
    return this.supportersService.findAll();
  }

  @MessagePattern('findOneSupporter')
  findOne(@Payload() id: number) {
    return this.supportersService.findOne(id);
  }

  @MessagePattern('updateSupporter')
  update(@Payload() updateSupporterDto: UpdateSupporterDto) {
    return this.supportersService.update(updateSupporterDto.id, updateSupporterDto);
  }

  @MessagePattern('removeSupporter')
  remove(@Payload() id: number) {
    return this.supportersService.remove(id);
  }
}

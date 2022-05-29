import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CodersService } from './coders.service';
import { CreateCoderDto } from './dto/create-coder.dto';
import { UpdateCoderDto } from './dto/update-coder.dto';

@WebSocketGateway()
export class CodersGateway {
  constructor(private readonly codersService: CodersService) {}

  @SubscribeMessage('createCoder')
  create(@MessageBody() createCoderDto: CreateCoderDto) {
    return this.codersService.create(createCoderDto);
  }

  @SubscribeMessage('findAllCoders')
  findAll() {
    return this.codersService.findAll();
  }

  @SubscribeMessage('findOneCoder')
  findOne(@MessageBody() id: number) {
    return this.codersService.findOne(id);
  }

  @SubscribeMessage('updateCoder')
  update(@MessageBody() updateCoderDto: UpdateCoderDto) {
    return this.codersService.update(updateCoderDto.id, updateCoderDto);
  }

  @SubscribeMessage('removeCoder')
  remove(@MessageBody() id: number) {
    return this.codersService.remove(id);
  }
}

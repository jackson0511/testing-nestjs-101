import { WebSocketGateway } from '@nestjs/websockets';
import { DevelopersService } from './developers.service';

@WebSocketGateway()
export class DevelopersGateway {
  constructor(private readonly developersService: DevelopersService) {}
}

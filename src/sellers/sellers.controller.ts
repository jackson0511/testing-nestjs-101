import { Controller } from '@nestjs/common';
import { SellersService } from './sellers.service';

@Controller()
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}
}

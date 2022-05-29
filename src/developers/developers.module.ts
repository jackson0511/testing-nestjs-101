import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersGateway } from './developers.gateway';

@Module({
  providers: [DevelopersGateway, DevelopersService]
})
export class DevelopersModule {}

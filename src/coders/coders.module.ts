import { Module } from '@nestjs/common';
import { CodersService } from './coders.service';
import { CodersGateway } from './coders.gateway';

@Module({
  providers: [CodersGateway, CodersService]
})
export class CodersModule {}

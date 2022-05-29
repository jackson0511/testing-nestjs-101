import { Module } from '@nestjs/common';
import { RacersService } from './racers.service';
import { RacersResolver } from './racers.resolver';

@Module({
  providers: [RacersResolver, RacersService]
})
export class RacersModule {}

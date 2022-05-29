import { Resolver } from '@nestjs/graphql';
import { RacersService } from './racers.service';

@Resolver('Racer')
export class RacersResolver {
  constructor(private readonly racersService: RacersService) {}
}

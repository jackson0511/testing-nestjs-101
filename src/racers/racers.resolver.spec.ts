import { Test, TestingModule } from '@nestjs/testing';
import { RacersResolver } from './racers.resolver';
import { RacersService } from './racers.service';

describe('RacersResolver', () => {
  let resolver: RacersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacersResolver, RacersService],
    }).compile();

    resolver = module.get<RacersResolver>(RacersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

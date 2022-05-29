import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersGateway } from './developers.gateway';
import { DevelopersService } from './developers.service';

describe('DevelopersGateway', () => {
  let gateway: DevelopersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopersGateway, DevelopersService],
    }).compile();

    gateway = module.get<DevelopersGateway>(DevelopersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CodersGateway } from './coders.gateway';
import { CodersService } from './coders.service';

describe('CodersGateway', () => {
  let gateway: CodersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodersGateway, CodersService],
    }).compile();

    gateway = module.get<CodersGateway>(CodersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

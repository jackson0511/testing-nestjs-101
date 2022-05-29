import { Test, TestingModule } from '@nestjs/testing';
import { CodersService } from './coders.service';

describe('CodersService', () => {
  let service: CodersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodersService],
    }).compile();

    service = module.get<CodersService>(CodersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

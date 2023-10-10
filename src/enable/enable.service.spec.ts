import { Test, TestingModule } from '@nestjs/testing';
import { EnableService } from './enable.service';

describe('EnableService', () => {
  let service: EnableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnableService],
    }).compile();

    service = module.get<EnableService>(EnableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

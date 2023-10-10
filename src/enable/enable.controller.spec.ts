import { Test, TestingModule } from '@nestjs/testing';
import { EnableController } from './enable.controller';
import { EnableService } from './enable.service';

describe('EnableController', () => {
  let controller: EnableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnableController],
      providers: [EnableService],
    }).compile();

    controller = module.get<EnableController>(EnableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

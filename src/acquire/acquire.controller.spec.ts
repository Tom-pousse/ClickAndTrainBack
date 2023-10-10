import { Test, TestingModule } from '@nestjs/testing';
import { AcquireController } from './acquire.controller';
import { AcquireService } from './acquire.service';

describe('AcquireController', () => {
  let controller: AcquireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcquireController],
      providers: [AcquireService],
    }).compile();

    controller = module.get<AcquireController>(AcquireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

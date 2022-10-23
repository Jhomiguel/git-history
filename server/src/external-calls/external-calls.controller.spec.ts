import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCallsController } from './external-calls.controller';
import { ExternalCallsService } from './external-calls.service';

describe('ExternalCallsController', () => {
  let controller: ExternalCallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalCallsController],
      providers: [ExternalCallsService],
    }).compile();

    controller = module.get<ExternalCallsController>(ExternalCallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

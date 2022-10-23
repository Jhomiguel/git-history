import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCallsService } from './external-calls.service';

describe('ExternalCallsService', () => {
  let service: ExternalCallsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalCallsService],
    }).compile();

    service = module.get<ExternalCallsService>(ExternalCallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

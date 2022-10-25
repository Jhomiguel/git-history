import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { OctokitService } from 'nestjs-octokit';
import { UtilService } from 'src/utils/app-util.service';
import { ExternalCallsService } from './external-calls.service';

describe('ExternalCallsService', () => {
  let service: ExternalCallsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExternalCallsService,
        OctokitService,
        ConfigService,
        UtilService,
      ],
    })
      .overrideProvider(OctokitService)
      .useValue({})
      .compile();

    service = module.get<ExternalCallsService>(ExternalCallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

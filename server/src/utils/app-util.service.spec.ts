import { Test, TestingModule } from '@nestjs/testing';
import { UtilService } from './app-util.service';

describe('ExternalCallsService', () => {
  let service: UtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilService],
    }).compile();

    service = module.get<UtilService>(UtilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should replace from snake to camel case object properties', () => {
    expect(
      service.fromSnakeToCamel({
        test_property: '',
      }),
    ).toMatchObject({ testProperty: '' });
  });

  it('should replace snake to camel case properties from array of objects', () => {
    expect(
      service.fromSnakeToCamel([
        {
          new_property: '',
        },
      ]),
    ).toMatchObject([{ newProperty: '' }]);
  });
});

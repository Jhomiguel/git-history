import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCallsService } from 'src/external-calls/external-calls.service';
import { CommitHistoryService } from './commit-history.service';
import { GetCommitHistoryDto } from './dto/get-commit-history.dto';

describe('CommitHistoryService', () => {
  let service: CommitHistoryService;
  let externalCallService: ExternalCallsService;
  const mockCommitHistoryPayload: GetCommitHistoryDto[] = [
    {
      commit: {
        author: {
          name: 'Jhomiguel Florian',
          email: 'jhomiguelflorianmendez20@gmail.com',
          date: new Date('2022-10-24T04:02:19Z'),
        },
        committer: {
          name: 'Jhomiguel Florian',
          email: 'jhomiguelflorianmendez20@gmail.com',
          date: new Date('2022-10-24T04:02:19Z'),
        },
        message:
          'feat:\n1) create commit-history module (including controller, service and dtos).\n2) expose endpoint to get commit history from current project',
        tree: {
          sha: 'fb04c8ab2f7847633a47547e06a1aac401673c72',
          url: 'https://api.github.com/repos/Jhomiguel/git-history/git/trees/fb04c8ab2f7847633a47547e06a1aac401673c72',
        },
        url: 'https://api.github.com/repos/Jhomiguel/git-history/git/commits/6aeaf2fd7e635eeb58fdac46ffd9582b13e8c6cd',
        commentCount: 0,
        verification: {
          verified: false,
          reason: 'unsigned',
          signature: null,
          payload: null,
        },
      },
      sha: '6aeaf2fd7e635eeb58fdac46ffd9582b13e8c6cd',
    },
  ];

  const mockExternalCallService = {
    findAllCommits: jest.fn(() => mockCommitHistoryPayload),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitHistoryService, ExternalCallsService],
    })
      .overrideProvider(ExternalCallsService)
      .useValue(mockExternalCallService)
      .compile();

    service = module.get<CommitHistoryService>(CommitHistoryService);
    externalCallService =
      module.get<ExternalCallsService>(ExternalCallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call external call service findAllCommits method', async () => {
    const spy = jest
      .spyOn(externalCallService, 'findAllCommits')
      .mockImplementation(() => Promise.resolve(mockCommitHistoryPayload));

    spy.getMockImplementation();
    service.findAll();
    expect(spy).toBeCalled();
  });

  it('should retrieve commit history from GitHub Api', async () => {
    const spy = jest
      .spyOn(externalCallService, 'findAllCommits')
      .mockImplementation(() => Promise.resolve(mockCommitHistoryPayload));

    expect(spy.getMockImplementation()()).toEqual(
      Promise.resolve(mockCommitHistoryPayload),
    );
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CommitHistoryController } from './commit-history.controller';
import { CommitHistoryService } from './commit-history.service';

describe('CommitHistoryController', () => {
  let controller: CommitHistoryController;
  const mockCommitHistoryPayload = [
    {
      commit: {
        author: {
          name: 'Jhomiguel Florian',
          email: 'jhomiguelflorianmendez20@gmail.com',
          date: '2022-10-24T04:02:19Z',
        },
        committer: {
          name: 'Jhomiguel Florian',
          email: 'jhomiguelflorianmendez20@gmail.com',
          date: '2022-10-24T04:02:19Z',
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

  const mockCommitHistoryService = {
    findAll: jest.fn((params) =>
      mockCommitHistoryPayload.slice(0, params?.perPage),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitHistoryController],
      providers: [CommitHistoryService],
    })
      .overrideProvider(CommitHistoryService)
      .useValue(mockCommitHistoryService)
      .compile();

    controller = module.get<CommitHistoryController>(CommitHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should get a list of commits', () => {
    expect(controller.findAll()).toEqual(mockCommitHistoryPayload);
  });
});

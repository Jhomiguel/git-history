import { Commit } from './commit.dto';

export interface GetCommitHistoryDto {
  sha: string;
  commit: Commit;
}

import { Author } from './author.dto';
import { Committer } from './commiter.dto';
import { Tree } from './tree.dto';
import { Verification } from './verification.dto';

export interface Commit {
  url: string;
  author: Author | null;
  committer: Committer | null;
  message: string;
  tree: Tree;
  commentCount: number;
  verification: Verification;
}

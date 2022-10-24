import { IAuthor } from "./IAuthor";
import { ICommitter } from "./ICommitter";
import { ITree } from "./ITree";
import { IVerification } from "./IVerification";

export interface ICommit {
  url: string;
  author: IAuthor | null;
  committer: ICommitter | null;
  message: string;
  tree: ITree;
  commentCount: number;
  verification: IVerification;
}

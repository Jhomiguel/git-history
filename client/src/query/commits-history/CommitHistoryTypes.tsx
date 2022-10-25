import { ICommit } from "../../models/ICommit";

export interface IGetCommitHistory {
  sha: string;
  commit: ICommit;
}

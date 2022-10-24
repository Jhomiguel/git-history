import { useQuery } from "react-query";
import { findCommitHistory } from "./CommitHistoryApi";

export enum CommitHistoryQueryKeys {
  GET_COMMIT_HISTORY = "GET_COMMIT_HISTORY",
}

export const useCommitHistory = () => {
  return useQuery([CommitHistoryQueryKeys.GET_COMMIT_HISTORY], () =>
    findCommitHistory()
  );
};

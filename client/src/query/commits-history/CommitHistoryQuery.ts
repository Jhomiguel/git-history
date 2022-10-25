import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLoadingContext } from "../../contexts/loading/LoadingContext";
import { findCommitHistory } from "./CommitHistoryApi";

export enum CommitHistoryQueryKeys {
  GET_COMMIT_HISTORY = "GET_COMMIT_HISTORY",
}

export const useCommitHistory = () => {
  const context = useLoadingContext();

  const query = useQuery([CommitHistoryQueryKeys.GET_COMMIT_HISTORY], () =>
    findCommitHistory()
  );
  useEffect(() => {
    query.isLoading ? context?.showLoading() : context?.hideLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isLoading]);

  return query;
};

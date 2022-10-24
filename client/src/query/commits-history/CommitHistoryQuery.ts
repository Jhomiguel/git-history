import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLoading } from "../../hooks/useLoading";
import { findCommitHistory } from "./CommitHistoryApi";

export enum CommitHistoryQueryKeys {
  GET_COMMIT_HISTORY = "GET_COMMIT_HISTORY",
}

export const useCommitHistory = () => {
  const query = useQuery(
    [CommitHistoryQueryKeys.GET_COMMIT_HISTORY],
    () => findCommitHistory(),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    query.isLoading ? useLoading(true) : useLoading(false);
  }, [query.isLoading]);

  return query;
};

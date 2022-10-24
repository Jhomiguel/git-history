import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLoading } from "../../hooks/useLoading";

export enum CommitHistoryQueryKeys {
  GET_COMMIT_HISTORY = "GET_COMMIT_HISTORY",
}

export const useCommitHistory = () => {
  const query = useQuery([CommitHistoryQueryKeys.GET_COMMIT_HISTORY], {
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    query.isLoading ? useLoading(true) : useLoading(false);
  }, [query.isLoading]);

  return query;
};

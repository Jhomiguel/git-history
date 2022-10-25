import { IGetCommitHistory } from "./CommitHistoryTypes";
import { axiosClient } from "../../configs/baseAxios";

export const findCommitHistory = async (): Promise<IGetCommitHistory[]> => {
  const { data } = await axiosClient.get<IGetCommitHistory[]>(
    "/v1/commits-history"
  );
  return data;
};

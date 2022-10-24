import { axios } from "../../configs/baseAxios";
import { ICommit } from "../../models/ICommit";

export const findCommitHistory = async (): Promise<{ commit: ICommit }[]> => {
  const { data } = await axios.get<{ commit: ICommit }[]>(
    "/v1/commits-history"
  );
  return data;
};

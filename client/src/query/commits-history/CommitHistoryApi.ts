import { axios } from "../../config/baseAxios";
import { ICommit } from "../../models/ICommit";

export const findCommits = async (): Promise<ICommit[]> => {
  const { data } = await axios.get<ICommit[]>("/v1/commits-history");
  return data;
};

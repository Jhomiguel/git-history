export interface GetCommitParamsDto {
  sha?: string;
  path: string;
  author?: string;
  since: string;
  until: string;
  perPage: number;
  page: number;
}

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useCommitHistory } from "../../query/commits-history/CommitHistoryQuery";

const columns: GridColDef[] = [
  {
    field: "author",
    headerName: "Author",
    width: 170,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "message",
    headerName: "Message",
    width: 1000,
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

const CommitHistoryTable = () => {
  const { data } = useCommitHistory();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={
          data?.map(({ commit }) => {
            return {
              id: commit?.message,
              message: commit?.message,
              author: commit.author?.name,
              date: commit.committer?.date,
            };
          }) || []
        }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default CommitHistoryTable;
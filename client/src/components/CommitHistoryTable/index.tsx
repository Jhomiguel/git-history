import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDateHelper } from "../../hooks/useDateHelper";
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
    width: 950,
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "actions",
    headerName: "Action",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => {
      return (
        <a
          href={`https://github.com/Jhomiguel/git-history/commit/${row.sha}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outlined">Show Details</Button>
        </a>
      );
    },
  },
];

const CommitHistoryTable = () => {
  const { data } = useCommitHistory();
  const { formatDate } = useDateHelper();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={
          data?.map(({ commit, sha }) => {
            return {
              id: sha,
              message: commit?.message,
              author: commit.author?.name,
              date: formatDate(new Date(commit.committer?.date as Date)),
              sha,
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

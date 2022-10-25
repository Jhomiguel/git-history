import { Stack } from "@mui/system";
import CommitHistoryTable from "../../components/CommitHistoryTable";
import Layout from "../../components/Layout";

const CommitHistoryPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <CommitHistoryTable />
      </Stack>
    </Layout>
  );
};
export default CommitHistoryPage;

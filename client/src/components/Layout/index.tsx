import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container maxWidth={false} style={{ marginTop: 100 }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;

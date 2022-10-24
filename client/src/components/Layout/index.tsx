import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

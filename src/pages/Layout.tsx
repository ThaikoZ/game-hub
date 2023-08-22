import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box paddingX={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { Navbar } from "./components";

const Layout = () => {
  return (
    <Stack direction="column" sx={{ backgroundColor: "#000", height: '100vh'}}>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default Layout;

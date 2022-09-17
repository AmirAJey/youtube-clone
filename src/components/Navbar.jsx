import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logoUrl } from "./../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    py={2}
    px={3}
    alignItems="center"
    justifyContent="space-between"
    sx={{ position: "sticky", top: 0, backgroundColor: "#000", zIndex: 1 }}
  >
    <Link to="/">
      <img src={logoUrl} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

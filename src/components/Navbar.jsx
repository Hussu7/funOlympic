import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#fff",
        justifyContent: "space-between",
        borderBottom: "1px solid red",
        position: "fixed",
        zIndex: "1",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={50} />
      </Link>
      <Link to=""></Link>
      <SearchBar/>
      <Box pr={7}>
        <Link to="/Login">
          <Typography>Login </Typography>
          <Avatar sx={{ bgcolor: "blue" }} />
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;

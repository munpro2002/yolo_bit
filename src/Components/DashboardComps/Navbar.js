import React from "react";
import classes from "./Navbar.module.scss";
import { Avatar, Box, Breadcrumbs, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Box
      className={classes.container}
      sx={{
        left: `${props.isOpenAppBar ? "250px" : "80px"}`,
      }}
    >
      <div className={classes.content}>
        <Breadcrumbs className={classes.breadcrumbs}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Home
              sx={{
                marginBottom: "2px",
                marginRight: "6px",
              }}
            />
            Yolo Farm Management
          </Typography>
          <Typography key="3" color="text.primary">
            {props.selected}
          </Typography>
        </Breadcrumbs>
        <Avatar />
      </div>
    </Box>
  );
};

export default Navbar;

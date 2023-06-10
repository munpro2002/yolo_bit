import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import { Avatar, Box, Breadcrumbs, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isShowAvaConfig, setIsShowAvaConfig] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      className={classes.container}
      sx={{
        left: `${props.isOpenAppBar ? "250px" : "80px"}`,
      }}
    >
      <div className={classes.content}>
        <Breadcrumbs>
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
        <Box>
          <Avatar
            onClick={() => {
              setIsShowAvaConfig((prev) => !prev);
            }}
            className={classes.avatar}
          />
          {isShowAvaConfig && (
            <Box className={classes["avatar__config"]}>
              <Typography variant="h5">Sign in as</Typography>
              <Typography className={classes["name"]}>
                Nguyen Thanh Duy An
              </Typography>
              <Box
                className={classes["logout"]}
                onClick={() => {
                  console.log("hello");
                  navigate("/login");
                  console.log("hello world");
                }}
              >
                <Logout style={{ paddingRight: "4px" }} />
                <Typography>Logout</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;

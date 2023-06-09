import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import classes from "./Dashboard.module.scss";
import {
  InvertColorsOutlined,
  BoltOutlined,
  AcUnitOutlined,
  ArrowUpward,
  ArrowDownward,
  DeviceThermostat,
  Lightbulb,
  Water,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box className={classes.container}>
      <Typography variant="h1">
        Welcome to Yolo Smart Farm Management System
      </Typography>
      <Grid container className={classes.content}>
        <Grid className={classes.item} item xs={11} lg={5}>
          <Box className={classes["item_inner"]}>
            <Box className={classes["item_inner--header"]}>
              <Typography variant="h5">Temperature (24h)</Typography>
              <DeviceThermostat style={{ color: "blue" }} />
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="span">
                Highest point:{" "}
                <strong style={{ fontSize: "20px" }}>29°C</strong>
              </Typography>
              <Typography variant="span">
                Lowest point: <strong style={{ fontSize: "20px" }}>23°C</strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                Current point:{" "}
                <strong style={{ fontSize: "20px" }}>24°C</strong>
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <ArrowUpward style={{ color: "red", paddingBottom: "2px" }} />
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  2°C
                </strong>
                (last 1h)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.item} item xs={11} lg={5}>
          <Box className={classes["item_inner"]}>
            <Box className={classes["item_inner--header"]}>
              <Typography variant="h5">Humidity (24h)</Typography>
              <InvertColorsOutlined style={{ color: "green" }} />
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="span">
                Highest point: <strong style={{ fontSize: "20px" }}>69%</strong>
              </Typography>
              <Typography variant="span">
                Lowest point: <strong style={{ fontSize: "20px" }}>60%</strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                Current point: <strong style={{ fontSize: "20px" }}>65%</strong>
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <ArrowDownward
                  style={{ color: "green", paddingBottom: "2px" }}
                />
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  2%
                </strong>
                (last 1h)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.item} item xs={11} lg={5}>
          <Box className={classes["item_inner"]}>
            <Box className={classes["item_inner--header"]}>
              <Typography variant="h5">Brightness (24h)</Typography>
              <BoltOutlined style={{ color: "yellow", fontSize: "30px" }} />
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="span">
                Highest point: <strong style={{ fontSize: "20px" }}>40%</strong>
              </Typography>
              <Typography variant="span">
                Lowest point: <strong style={{ fontSize: "20px" }}>70%</strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                Current point: <strong style={{ fontSize: "20px" }}>50%</strong>
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <ArrowUpward style={{ color: "red", paddingBottom: "2px" }} />
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  10%
                </strong>
                (last 1h)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.item} item xs={11} lg={5}>
          <Box className={classes["item_inner"]}>
            <Typography variant="h5">Devices Status</Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={{ display: "flex", alignItems: "center" }}>
                <AcUnitOutlined
                  style={{ color: "#90e0ef", marginRight: "6px" }}
                />
                Fan Controller
              </Typography>
              <Typography style={{ fontWeight: "bold", color: "green" }}>
                ON
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={{ display: "flex", alignItems: "center" }}>
                <Lightbulb style={{ color: "#F8DF5A", marginRight: "6px" }} />
                Light Controller
              </Typography>
              <Typography style={{ fontWeight: "bold", color: "red" }}>
                OFF
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={{ display: "flex", alignItems: "center" }}>
                <Water style={{ color: "blue", marginRight: "6px" }} />
                Water Pump
              </Typography>
              <Typography style={{ fontWeight: "bold", color: "green" }}>
                ON
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

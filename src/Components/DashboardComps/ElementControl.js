import React from "react";
import LineChart from "./LineChart";
import classes from "./ElementControl.module.scss";
import { Box, Typography, Grid, Switch } from "@mui/material";

const ElementControl = (props) => {
  const statics = props.data.datasets[0].data;
  const maxValue = Math.max(...statics);
  const minValue = Math.min(...statics);
  const currValue = statics[11];

  return (
    <Box className={classes.container}>
      <LineChart options={props.options} data={props.data} />
      <Grid container className={classes["chart_analysis"]}>
        <Grid
          className={classes["chart_analysis--note"]}
          item
          xs={12}
          lg={6}
          style={{ borderRight: "2px solid #d9d9d9" }}
        >
          <Typography variant="h5">Chart Analysis</Typography>
          <Typography className={classes["chart_analysis--card"]}>
            Current {props.type}:{" "}
            <strong>
              {currValue} {props.type === "Temperature" ? "°C" : "%"}{" "}
            </strong>
          </Typography>
          <Typography className={classes["chart_analysis--card"]}>
            Highest {props.type}:{" "}
            <strong>
              {maxValue} {props.type === "Temperature" ? "°C" : "%"}{" "}
            </strong>
          </Typography>
          <Typography className={classes["chart_analysis--card"]}>
            Lowest {props.type}:{" "}
            <strong>
              {minValue} {props.type === "Temperature" ? "°C" : "%"}{" "}
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5">
            {props.type === "Brightness"
              ? "Brightness"
              : props.type === "Humidity"
              ? "Humidity"
              : "Temperature"}{" "}
            Controller
          </Typography>
          <Box className={classes["device_controller"]}>
            <Typography>
              {props.type === "Brightness"
                ? "Light"
                : props.type === "Humidity"
                ? "Waterpump"
                : "Fan"}{" "}
              status controlling:
            </Typography>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Typography>Off</Typography>
              <Switch defaultChecked={true} />
              <Typography>On</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ElementControl;

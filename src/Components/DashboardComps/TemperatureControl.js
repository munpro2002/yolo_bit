import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { faker } from "@faker-js/faker";
import classes from "./TemperatureControl.module.scss";
import { Box, Typography, Grid, Switch } from "@mui/material";

const labels = [
  "Last 1h",
  "Last 2h",
  "Last 3h",
  "Last 4h",
  "Last 5h",
  "Last 6h",
  "Last 7h",
  "Last 8h",
  "Last 9h",
  "Last 10h",
  "Last 11h",
  "Last 12h",
];

const data = {
  labels,
  datasets: [
    {
      label: "Temperature °C",
      data: labels.map(() => faker.datatype.number({ min: 25, max: 30 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature Measurements (°C)",
    },
  },
};

const TemperatureControl = () => {
  // useEffect(() => {
  //   fetch("https://io.adafruit.com/api/v2/vtkienn/feeds/temperature/data")
  //     .then((res) => res.json())
  //     .then((results) => console.log(results));
  // }, []);

  return (
    <Box className={classes.container}>
      <LineChart options={options} data={data} />
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
            Current Temperature: <strong>30°C</strong>
          </Typography>
          <Typography className={classes["chart_analysis--card"]}>
            Highest Temperature: <strong>30°C</strong>
          </Typography>
          <Typography className={classes["chart_analysis--card"]}>
            Lowest Temperature: <strong>30°C</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5">Fan Controller</Typography>
          <Box className={classes["device_controller"]}>
            <Typography>Fan status controlling:</Typography>
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

export default TemperatureControl;

import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
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
  Warning,
  DeleteForever,
} from "@mui/icons-material";
import Modal from "../../UI/Modal";
import ScheduleForm from "./ScheduleForm";
import { DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Dashboard = (props) => {
  const tempStatics = props.tempData.datasets[0].data;
  const lightStatics = props.lightData.datasets[0].data;
  const humStatics = props.humData.datasets[0].data;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [schedules, setSchedules] = useState([]);

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const openModalHandler = () => {
    setIsOpenModal(true);
  };

  const addNewScheduleHandler = (schedule) => {
    console.log(schedule);
    setSchedules((prev) => [schedule, ...prev]);

    setIsOpenModal(false);
  };

  const removeScheduleHandler = (id) => {
    const newSchedules = schedules.filter((sch) => sch.id !== id);
    setSchedules(newSchedules);
  };

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
                <strong style={{ fontSize: "20px" }}>
                  {Math.max(...tempStatics)}°C
                </strong>
              </Typography>
              <Typography variant="span">
                Lowest point:{" "}
                <strong style={{ fontSize: "20px" }}>
                  {" "}
                  {Math.min(...tempStatics)}°C
                </strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className={classes["current_value"]}>
                <Typography>
                  Current point:{" "}
                  <strong style={{ fontSize: "20px" }}>
                    {" "}
                    {tempStatics[0]}°C
                  </strong>
                </Typography>
                {(tempStatics[0] < 27 || tempStatics[0] > 29) && (
                  <Warning className={classes["warning"]} />
                )}
                <Box className={classes["warning_des"]}>
                  <Typography>
                    Not within the appropriate range 27°C-29°C
                  </Typography>
                </Box>
              </Box>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                {tempStatics[0] - tempStatics[1] >= 0 && (
                  <ArrowUpward style={{ color: "red", paddingBottom: "2px" }} />
                )}
                {tempStatics[0] - tempStatics[1] < 0 && (
                  <ArrowDownward
                    style={{ color: "green", paddingBottom: "2px" }}
                  />
                )}
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {Math.abs(tempStatics[0] - tempStatics[1])}°C
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
                Highest point:{" "}
                <strong style={{ fontSize: "20px" }}>
                  {Math.max(...humStatics)}%
                </strong>
              </Typography>
              <Typography variant="span">
                Lowest point:{" "}
                <strong style={{ fontSize: "20px" }}>
                  {Math.min(...humStatics)}%
                </strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className={classes["current_value"]}>
                <Typography>
                  Current point:{" "}
                  <strong style={{ fontSize: "20px" }}>
                    {" "}
                    {humStatics[0]}%
                  </strong>
                </Typography>
                {(humStatics[0] < 45 || humStatics[0] > 65) && (
                  <Warning className={classes["warning"]} />
                )}
                <Box className={classes["warning_des"]}>
                  <Typography>
                    Not within the appropriate range 45%-65%
                  </Typography>
                </Box>
              </Box>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                {humStatics[0] - humStatics[1] >= 0 && (
                  <ArrowUpward style={{ color: "red", paddingBottom: "2px" }} />
                )}
                {humStatics[0] - humStatics[1] < 0 && (
                  <ArrowDownward
                    style={{ color: "green", paddingBottom: "2px" }}
                  />
                )}
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {Math.abs(humStatics[0] - humStatics[1])}%
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
                Highest point:{" "}
                <strong style={{ fontSize: "20px" }}>
                  {Math.max(...lightStatics)}%
                </strong>
              </Typography>
              <Typography variant="span">
                Lowest point:{" "}
                <strong style={{ fontSize: "20px" }}>
                  {Math.min(...lightStatics)}%
                </strong>
              </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className={classes["current_value"]}>
                <Typography>
                  Current point:{" "}
                  <strong style={{ fontSize: "20px" }}>
                    {" "}
                    {lightStatics[0]}%
                  </strong>
                </Typography>
                {(lightStatics[0] < 40 || lightStatics[0] > 70) && (
                  <Warning className={classes["warning"]} />
                )}
                <Box className={classes["warning_des"]}>
                  <Typography>
                    Not within the appropriate range 40%-70%
                  </Typography>
                </Box>
              </Box>
              <Typography
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                {lightStatics[0] - lightStatics[1] >= 0 && (
                  <ArrowUpward style={{ color: "red", paddingBottom: "2px" }} />
                )}
                {lightStatics[0] - lightStatics[1] < 0 && (
                  <ArrowDownward
                    style={{ color: "green", paddingBottom: "2px" }}
                  />
                )}
                <strong
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {Math.abs(lightStatics[0] - lightStatics[1])}%
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

        <Grid className={classes["schedule_header"]} item xs={11}>
          <Typography variant="h3">Schedules</Typography>
          <Button onClick={openModalHandler}>Add new</Button>
        </Grid>
        {isOpenModal && (
          <Modal onCloseModal={closeModalHandler}>
            <ScheduleForm
              onAddNewSchedule={addNewScheduleHandler}
              onCloseModal={closeModalHandler}
            />
          </Modal>
        )}
        {schedules.length === 0 && (
          <Typography
            style={{
              fontSize: "1.5rem",
              color: "slategray",
              marginTop: "1.5rem",
            }}
          >
            No tasks at the moment
          </Typography>
        )}
        {schedules.length !== 0 &&
          schedules.map((schedule) => (
            <Grid
              key={schedule.id}
              className={classes["schedule_item"]}
              item
              xs={11}
              lg={5}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker defaultValue={schedule.time} />
                </DemoContainer>
              </LocalizationProvider>
              <Typography style={{ marginTop: "4px" }}>
                {schedule.task === 1
                  ? "Turn on/off the light controller"
                  : schedule.task === 2
                  ? "Turn on/off the waterpump"
                  : "Turn on/off the temperature controller"}
              </Typography>
              <Box style={{ textAlign: "right" }}>
                <DeleteForever
                  onClick={removeScheduleHandler.bind(null, schedule.id)}
                  style={{ cursor: "pointer", color: "red" }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;

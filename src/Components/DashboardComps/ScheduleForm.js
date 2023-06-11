import React, { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import classes from "./Schedule.module.scss";

const ScheduleForm = (props) => {
  const [task, setTask] = useState(null);
  const [time, setTime] = useState(null);

  const handleTasksChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setTime(event);
  };

  const submitSchedule = () => {
    props.onAddNewSchedule({
      task: task,
      time: time,
      id: Math.random(),
    });
  };

  return (
    <Box>
      <Box className={classes["date_time"]}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              onChange={handleDateTimeChange}
              label="Schedule your works"
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box className={classes["data_form"]}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Task</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleTasksChange}
          >
            <MenuItem value={1}>Turn on/off the light controller</MenuItem>
            <MenuItem value={2}>Turn on/off the waterpump</MenuItem>
            <MenuItem value={3}>
              Turn on/off the temperature controller
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Button onClick={submitSchedule}>Save</Button>
        <Button onClick={props.onCloseModal}>Close</Button>
      </Box>
    </Box>
  );
};

export default ScheduleForm;

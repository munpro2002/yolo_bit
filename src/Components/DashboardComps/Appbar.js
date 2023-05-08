import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import {
  MenuOutlined,
  DeviceThermostat,
  GridView,
  Water,
  Lightbulb,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Appbar = (props) => {
  const { collapseSidebar } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      transitionDuration={800}
      rootStyles={{
        position: "fixed",
        zIndex: 10,
        height: "100vh",
        "& > .ps-sidebar-container": {
          backgroundColor: "#263544",
          color: "#B7C0CD",
        },
      }}
    >
      <Menu>
        <MenuItem
          rootStyles={{
            ["." + menuClasses.button]: {
              height: "70px !important",
              boxShadow: "0 0px 2px 0 rgba(0, 0, 0, 0.6)",
              marginBottom: "16px",
              "&:hover": {
                backgroundColor: "unset !important",
                color: "white",
              },
            },
          }}
          icon={<MenuOutlined />}
          onClick={() => {
            props.openAppBar();
            collapseSidebar();
          }}
        >
          {" "}
          <h2>Admin</h2>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelected("Dashboard");
            props.selected("Dashboard");
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              backgroundColor: `${selected === "Dashboard" ? "#1D2531" : ""}`,
              color: `${selected === "Dashboard" ? "white !important" : ""}`,
              "&:hover": {
                backgroundColor: `${
                  selected === "Dashboard" ? "#1D2531" : "unset"
                } !important`,
                color: "white",
              },
            },
          }}
          icon={<GridView />}
          component={<Link to="/dashboard" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelected("Temperature");
            props.selected("Temperature");
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              backgroundColor: `${selected === "Temperature" ? "#1D2531" : ""}`,
              color: `${selected === "Temperature" ? "white !important" : ""}`,
              "&:hover": {
                backgroundColor: `${
                  selected === "Temperature" ? "#1D2531" : "unset"
                } !important`,
                color: "white",
              },
            },
          }}
          icon={<DeviceThermostat />}
          component={<Link to="/dashboard/temperature" />}
        >
          Temperature
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelected("Humidity");
            props.selected("Humidity");
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              backgroundColor: `${selected === "Humidity" ? "#1D2531" : ""}`,
              color: `${selected === "Humidity" ? "white !important" : ""}`,
              "&:hover": {
                backgroundColor: `${
                  selected === "Humidity" ? "#1D2531" : "unset"
                } !important`,
                color: "white",
              },
            },
          }}
          icon={<Water />}
          component={<Link to="/dashboard/humidity" />}
        >
          Humidity
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelected("Light");
            props.selected("Light");
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              backgroundColor: `${selected === "Light" ? "#1D2531" : ""}`,
              color: `${selected === "Light" ? "white !important" : ""}`,
              "&:hover": {
                backgroundColor: `${
                  selected === "Light" ? "#1D2531" : "unset"
                } !important`,
                color: "white",
              },
            },
          }}
          icon={<Lightbulb />}
          component={<Link to="/dashboard/light" />}
        >
          Light
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Appbar;

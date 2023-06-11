import React, { useState } from "react";
import Appbar from "../Components/DashboardComps/Appbar";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/DashboardComps/Navbar";
import Dashboard from "../Components/DashboardComps/Dashboard";
import ElementControl from "../Components/DashboardComps/ElementControl";
import {
  TemperatureData,
  TemperatureOptions,
  HumidityData,
  HumidityOptions,
  LightOptions,
  LightData,
} from "../Data/Data";

const DashboardPage = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [isOpenAppBar, setIsOpenAppBar] = useState(true);

  const selectItemHandler = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={({ height: "100vh" }, { display: "flex" })}>
      <Appbar
        selected={selectItemHandler}
        openAppBar={() => {
          setIsOpenAppBar((prev) => !prev);
        }}
      />
      <main
        style={{
          width: "100%",
          marginLeft: `${isOpenAppBar ? "250px" : "80px"}`,
          paddingBottom: "40px",
          marginTop: "70px",
          transition: "all ease 800ms",
          position: "relative",
        }}
      >
        <Navbar isOpenAppBar={isOpenAppBar} selected={selectedItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                tempData={TemperatureData}
                humData={HumidityData}
                lightData={LightData}
              />
            }
          />
          <Route
            path="/temperature"
            element={
              <ElementControl
                options={TemperatureOptions}
                data={TemperatureData}
                type="Temperature"
              />
            }
          />
          <Route
            path="/humidity"
            element={
              <ElementControl
                options={HumidityOptions}
                data={HumidityData}
                type="Humidity"
              />
            }
          />
          <Route
            path="/light"
            element={
              <ElementControl
                options={LightOptions}
                data={LightData}
                type="Brightness"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardPage;

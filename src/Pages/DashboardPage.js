import React, { useState } from "react";
import Appbar from "../Components/DashboardComps/Appbar";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/DashboardComps/Navbar";
import TemperatureControl from "../Components/DashboardComps/TemperatureControl";
import Dashboard from "../Components/DashboardComps/Dashboard";

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
          <Route path="/" element={<Dashboard />} />
          <Route path="/temperature" element={<TemperatureControl />} />
          <Route path="/humidity" element="" />
          <Route path="/light" element="" />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardPage;

import React from "react";
import Appbar from "../Components/DashboardComps/Appbar";
import { Routes, Route } from "react-router-dom";
import TemperatureControl from "../Components/DashboardComps/TemperatureControl";

const DashboardPage = () => {
  return (
    <div style={({ height: "100vh" }, { display: "flex" })}>
      <Appbar />
      <main>
        <h1>hello</h1>
        <Routes>
          <Route path="/" element="" />
          <Route path="/temperature" element={<TemperatureControl />} />
          <Route path="/humidity" element="" />
          <Route path="/light" element="" />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardPage;

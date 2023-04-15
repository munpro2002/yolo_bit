import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="dashboard/*" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;

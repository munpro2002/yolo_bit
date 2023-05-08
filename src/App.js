import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="dashboard/*" element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

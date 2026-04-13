import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";
import ProtectedRoute from "./utils/protectedRoute.jsx";
import HomePage from "./pages/home.jsx";
import UserUpdatePage from "./pages/changeDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              {" "}
              <HomePage />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-details"
          element={
            <ProtectedRoute>
              {" "}
              <UserUpdatePage />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

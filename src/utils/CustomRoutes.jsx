import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AdminDashboard from "../../components/Backend/AdminDashboard";
import AdminLogin from "../../components/AdminLogin/AdminLogin";
import Home from "../components/Frontend/Home";

const CustomRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/login" element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;

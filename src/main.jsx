import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Login from './pages/login/login.jsx'
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Footer from "./ui/footer/footer.jsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route index path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App.jsx';
import Login from './pages/login/login.jsx';
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Footer from "./ui/footer/footer.jsx";
import "./index.css";
import { SessionProvider, useSessionContext } from "./context/loginSession.jsx";

const ProtectedRoute = ({ children }) => {
  const { isUserLogged } = useSessionContext();

  if (!isUserLogged) {
    return <Navigate to="/login" />;
  } 

  return children;
};

const PublicRoute = ({ children }) => { 
  const { isUserLogged } = useSessionContext();
  console.log(isUserLogged)
  if (isUserLogged) {
    return <Navigate to="/dashboard" />;
  } 
  return children;
}


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <SessionProvider>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/" element={ <ProtectedRoute> <App /> </ProtectedRoute>}>
          <Route path="dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        </Route>
        <Route path="*" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </SessionProvider>
);

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";

function AllRoutes() {
  const [token, setToken] = useState([]);
  return (
    <div>
      {/* Routes */}
      {/* Home */}
      {/* Login */}
      {/* Private Route: Dashboard */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          tok={token}
          setTok={setToken}
          element={<Login />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard token={token} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;

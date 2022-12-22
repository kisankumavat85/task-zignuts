import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;

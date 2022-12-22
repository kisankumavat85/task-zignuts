import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../contexts/auth-context";

const ProtectedRoute = ({ children }) => {
  const context = useContext(AuthContext);

  if (!context.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loader from "../../Common/Loader/Loader";

const RequiredAdmin = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loader></Loader>;
  }

  if (!user || !admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequiredAdmin;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { RootState } from "../store";

const AuthProtected = (props: any) => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    // alert("Please Login First");
    return (
      <Navigate to={{ pathname: "/dashboard" }} state={{ from: props.location }} />
    );
  }
  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return <></>;
};

export { AuthProtected, AccessRoute };

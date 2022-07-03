import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./_components/Navbar";

export default function Admin() {
  if (!localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/auth" />;

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

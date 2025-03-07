import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex bg-[#F8FAFF] ">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1  w-full  p-4">
        <Navbar></Navbar>
        <Outlet /> {/* Renders the child route content */}
      </div>
    </div>
  );
};

export default Layout;

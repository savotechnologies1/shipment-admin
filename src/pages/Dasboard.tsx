import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DasboardDetails from "./Shipment";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 bg-[#F5F6FA]">
        <Navbar />
       <DasboardDetails/>
      </div>
    </div>
  );
};

export default Dashboard;

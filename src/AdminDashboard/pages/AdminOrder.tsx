import React, { useState } from "react";

import img from "../../assets/address.png";
import img1 from "../../assets/processing.png";
import img2 from "../../assets/transit.png";
import img3 from "../../assets/delivery.png";
import img4 from "../../assets/delivered.png";
import img5 from "../../assets/undelivered.png";
import img6 from "../../assets/volume.png";
import img7 from "../../assets/weight.png";
import img8 from "../../assets/damaged.png";
import calender from "../../assets/calender_2.png";
import down from "../../assets/down_arrow.png";

import { NavLink } from "react-router-dom";
import DailyOrderList from "../components/DailyOrderList";
import AdminOrderList from "../components/AdminOrderList";
import { FaCalendarAlt } from "react-icons/fa";

const AdminOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Set Status");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setIsOpen(false); // Close dropdown after selection
  };
  const statusItems = [
    {
      icon: img1,
      label: "Processing",
    },
    { icon: img2, label: "Transit" },
    {
      icon: img3,
      label: "Delivery",
    },
    {
      icon: img4,
      label: "Delivered",
    },
    {
      icon: img5,
      label: "Undeliverable",
    },
    {
      icon: img6,
      label: "Volume",
    },
    {
      icon: img7,
      label: "Weight",
    },
    {
      icon: img8,
      label: "Damaged",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
          {" "}
          Order List
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 p-4 justify-between rounded-lg">
        <div className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white w-full justify-between">
          <span className="font-semibold">Date</span>
          <img src={calender} alt="" />
        </div>
        <div className="border px-4 py-2 rounded-lg bg-white font-semibold w-full">
          Number of Order
        </div>
        <div className="border px-4 py-2 rounded-lg bg-white font-semibold w-full">
          Tracking
        </div>
        <div
          onClick={toggleDropdown}
          className="border px-4 py-2 rounded-lg bg-white font-semibold flex items-center justify-between w-full relative cursor-pointer"
        >
          {status} <span className="ml-2"></span>
          <img src={down} alt="" />
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg">
              <div
                className="flex items-center px-8 py-2 cursor-pointer hover:bg-gray-200 justify-between"
                onClick={() => handleStatusChange("Processing")}
              >
                {" "}
                <img src={img1} alt="Processing" className="w-5 mr-2" />
                <div> Processing</div>
              </div>
              <div
                className="flex items-center px-8 py-2 cursor-pointer hover:bg-gray-200 justify-between"
                onClick={() => handleStatusChange("Transit")}
              >
                {" "}
                <img src={img2} alt="Transit" className="w-5 mr-2" />
                <div> Transit</div>
              </div>
              <div
                className="flex items-center px-8 py-2 cursor-pointer hover:bg-gray-200 justify-between"
                onClick={() => handleStatusChange("Delivery")}
              >
                <img src={img4} alt="Delivery" className="w-5 mr-2" />
                Delivery
              </div>
              <div
                className="flex items-center px-8 py-2 cursor-pointer hover:bg-gray-200 justify-between"
                onClick={() => handleStatusChange("Delivered")}
              >
                <img src={img4} alt="Delivered" className="w-5 mr-2" />
                Delivered
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-4">
        <div className="py-8">
          <AdminOrderList />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 p-4  rounded-lg items-center">
        {statusItems.map((item, index) => (
          <div key={index} className="flex gap-2 items-center justify-center">
            <img src={item.icon} alt="" />
            <span className="mt-2 text-lg font-semibold ">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrder;

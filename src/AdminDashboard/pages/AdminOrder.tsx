import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
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
import AdminOrderList from "../components/AdminOrderList";

const AdminOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Set Status");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsOpen(false);
  };

  const statusItems = [
    { icon: img1, label: "Processing" },
    { icon: img2, label: "Transit" },
    { icon: img3, label: "Delivery" },
    { icon: img4, label: "Delivered" },
    { icon: img5, label: "Undeliverable" },
    { icon: img6, label: "Volume" },
    { icon: img7, label: "Weight" },
    { icon: img8, label: "Damaged" },
  ];

  return (
    <div className="p-4 w-full">
      <div className="flex items-center gap-2">
        <img src={img} alt="Order Icon" className="w-6 h-6" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#213C70]">Order List</h1>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white justify-between">
          <span className="font-semibold">Date</span>
          <img src={calender} alt="Calendar" className="w-5 h-5" />
        </div>
        <div className="border px-4 py-2 rounded-lg bg-white font-semibold text-center">
          Number of Orders
        </div>
        <div className="border px-4 py-2 rounded-lg bg-white font-semibold text-center">
          Tracking
        </div>
        <div
          onClick={toggleDropdown}
          className="border px-4 py-2 rounded-lg bg-white font-semibold flex items-center justify-between relative cursor-pointer"
        >
          {status} <IoIosArrowDown className="ml-2" />
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
              {statusItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleStatusChange(item.label)}
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5 mr-2" />
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order List */}
      <div className="py-4">
        <AdminOrderList />
      </div>

      {/* Status Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {statusItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            <img src={item.icon} alt={item.label} className="w-10 h-10" />
            <span className="text-lg font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrder;
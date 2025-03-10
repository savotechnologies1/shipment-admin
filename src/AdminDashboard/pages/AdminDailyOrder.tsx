import React from "react";

import img from "../../assets/shipment_list_icon.png";
import img1 from "../../assets/processing.png";
import img2 from "../../assets/transit.png";
import img3 from "../../assets/delivery.png";
import img4 from "../../assets/delivered.png";
import img5 from "../../assets/undelivered.png";
import img6 from "../../assets/volume.png";
import img7 from "../../assets/weight.png";
import img8 from "../../assets/damaged.png";

import { NavLink } from "react-router-dom";
import DailyOrderList from "../components/DailyOrderList";


const AdminDailyOrder = () => {
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
        <h1 className="text-xl xl:text-4xl font-bold text-[#213C70]"> Daily Order</h1>
      </div>

      <div className="py-4">
        <div className="py-8">
          <DailyOrderList />
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

export default AdminDailyOrder;

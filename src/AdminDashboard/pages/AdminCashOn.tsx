import React from "react";

import img from "../../assets/cashon.png";
import filter from "../../assets/filter_2.png";

import { NavLink } from "react-router-dom";
import AdminCashOnList from "../components/AdminCashOnList";

const AdminCashOn = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-center  justify-between gap-2">
        <div className="flex  items-center gap-2">
          <img src={img} alt="" />
          <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
            {" "}
            Cash on Delivery
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-[#213C70] text-white px-2 py-2 text-lg font-medium rounded-md">
          <img src={filter} alt="" />
          <button>Filter Table</button>
        </div>
      </div>

      <div className="py-4">
        <div className="py-8">
          <AdminCashOnList />
        </div>
      </div>
    </div>
  );
};

export default AdminCashOn;

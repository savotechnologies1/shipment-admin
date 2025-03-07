import React from "react";

import img from "../assets/cashon.png";

import { NavLink } from "react-router-dom";
import ShipmentList from "../components/ShipmentList";
import CashOnList from "../components/CashOnList";


const CashOnDelivery = () => {
 
  return (
    <div className="p-4">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]"> Cash on Delivery</h1>
      </div>

      <div className="py-4">
        <div className="py-8">
       <CashOnList/>
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;

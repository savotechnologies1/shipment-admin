import React from "react";

import img from "../../assets/earnings_icon.png";

import { NavLink } from "react-router-dom";
import EarningList from "../conponents/EarningList";


const Earnings = () => {
 
  return (
    <div className="p-4">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-4xl font-bold text-[#213C70]"> Earning</h1>
      </div>

      <div className="py-4">
        <div className="py-8">
       <EarningList/>
        </div>
      </div>
    </div>
  );
};

export default Earnings;

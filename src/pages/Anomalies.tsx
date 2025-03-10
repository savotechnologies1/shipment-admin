import React from "react";

import img from "../assets/anomalies.png";

import { NavLink } from "react-router-dom";
import AnomaliesList from "../components/AnomaliesList";

const Anomalies = () => {

  return (
    <div className="p-4">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl xl:text-4xl font-bold text-[#213C70]">Anomalies </h1>
      </div>

      <div className="py-4">
        <div className="py-8">
          <AnomaliesList />
        </div>
      </div>
    </div>
  );
};

export default Anomalies;

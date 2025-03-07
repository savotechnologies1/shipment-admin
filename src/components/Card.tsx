import React from "react";
import search from "../assets/search.png";

const Card = ({ title, value, img, bgColor,  }) => {
  return (
    <div className={`p-4 rounded-xl shadow-sm bg-white  relative py-8 `}>
      <div className="flex  justify-between items-center px-2">
        <div className="flex flex-col justify-between items-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg text-gray-700">{title}</h3>
            <p className="text-xl md:text-3xl font-bold">{value}</p>
            <p className="text-sm">
              <span className="font-bold">8.2%</span>{" "}
              <span className="text-gray-400">last 7 days</span>
            </p>
          </div>
        </div>
        <div className="items-center">
            <img src={img} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";

import img from "../assets/topup.png";
import TopUpModal from "../components/TopUpModal";
const topUpOptions = [
  { amount: 50, bonus: 53, tax: 10 },
  { amount: 100, bonus: 110, tax: 12 },
  { amount: 300, bonus: 340, tax: 45 },
  { amount: 500, bonus: 570, tax: 21 },
  { amount: 1000, bonus: 1220, tax: 26 },
];



const TopUp = () => {
  const [selected, setSelected] = useState(topUpOptions[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-4 ">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
          Top Up{" "}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2">
          <h2 className="font-bold text-lg mb-10">Top Up Amount</h2>
          <div className="flex justify-between text-xl font-semibold mb-10 border-b">
            <span>
              Top Up <span className="text-3xl">{selected.amount}$</span>
            </span>
            <span>
              Get <span className="text-2xl">{selected.bonus}$</span>
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {topUpOptions.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelected(option)}
                className={`relative border p-3 rounded-full w-full flex items-center justify-center text-lg font-medium ${
                  selected.amount === option.amount
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {option.bonus > 0 && (
                  <span className="absolute top-0 -mt-3 bg-[#3D5EDB] text-white text-xs px-2 py-1 rounded-full">
                    Get {option.bonus}$
                  </span>
                )}
                {option.amount}$
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full bg-[#213C70] text-white py-3 rounded-lg text-lg font-semibold"
          >
            Top Up
          </button>

          <TopUpModal
            isOpen={isModalOpen}
            subtotal={selected.bonus}
            tax = {selected.tax}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

        {/* Right Section */}
        <div className="p-6 rounded-2xl shadow-lg w-full md:w-1/2 bg-white">
          <h2 className="font-bold text-lg mb-4">Top Up Details</h2>
          <div className="flex justify-between mb-2 font-semibold">
            <span>Amount</span>
            <span>- {selected.amount}$</span>
          </div>
          <div className="flex justify-between mb-2 font-semibold">
            <span>Get Extra</span>
            <span>- {selected.bonus - selected.amount}$</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>- {selected.bonus}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;

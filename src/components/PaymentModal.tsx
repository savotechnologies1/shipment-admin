import React from "react";

import payment from "../assets/payment.gif"

const PaymentModal = ({ isClick, onClose }) => {
  if (!isClick) return null; // Don't render if isClick is false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] text-center shadow-lg">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <img
            src={payment}
            alt="Success"
            className=""
          />
        </div>

        {/* Success Message */}
        <h2 className="text-lg font-semibold">Your Payment has been successfully </h2>
        <p className=" mt-2">
          Hello RobertFox001, your payment was successful. Now you can video consult with Andrews Stret.
        </p>

        {/* Continue Button */}
        <button
          onClick={onClose}
          className="mt-6 bg-[#213C70] text-white py-2 px-6 rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;

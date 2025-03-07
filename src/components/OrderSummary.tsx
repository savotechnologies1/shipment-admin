import React, { useState } from "react";
import AccountDetailsModal from "./AccountDetailsModal";

const OrderSummarty = ({isClick, onClose})=> {
    if (!isClick) return null;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>$70.00</span>
          </p>
          <p className="flex justify-between">
            <span>Taxes:</span> <span>$14.00</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Total:</span> <span>$84.00</span>
          </p>
        </div>
        <div className="mt-4">
          <button
          onClick={()=> setIsClicked(true)}
           className="w-full bg-[#213C70] text-white py-2 rounded-lg text-lg font-semibold">
            Continue
          </button>

        
          <AccountDetailsModal isClick={isClicked} onClose={() => setIsClicked(false)} />

          
          <button
            className="w-full mt-2 border py-2 rounded-lg text-lg font-semibold"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummarty;

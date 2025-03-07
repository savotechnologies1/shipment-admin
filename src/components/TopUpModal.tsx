import React, { useState } from "react";
import AccountDetailsModal from "./AccountDetailsModal";

const TopUpModal = ({ isOpen, onClose, subtotal, tax }) => {
  if (!isOpen) return null;


  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>${subtotal}</span>
          </p>
          <p className="flex justify-between">
            <span>Taxes:</span> <span>${tax}</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Total:</span> <span>${subtotal + tax}</span>
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

export default TopUpModal;

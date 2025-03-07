import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
import img_1 from "./../assets/account_1.png"
import img_2 from "./../assets/account_2.png"
import img_3 from "./../assets/account_3.png"

const AccountDetailsModal = ({ isClick, onClose }) => {
  if (!isClick) return null; // Do not render if isClick is false

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[600px]">
        <h2 className="text-xl font-bold mb-4">Fill Bank Account Details</h2>
        <div className="grid gap-3">
  {/* First Row */}
  <div className="flex flex-col sm:flex-row gap-2">
    {/* Bank Account Holder Name */}
    <div className="relative w-full">
      <img
        src={img_1}
        alt="User"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        className="border px-2 py-4 pl-10 w-full rounded-md bg-[#F9F9F9] outline-none"
        placeholder="Bank Account Holder Name"
      />
    </div>

    {/* Select Bank */}
    <div className="relative w-full">
      <img
        src={img_2}
        alt="Bank"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <select className="border px-2 py-4 pl-10 w-full rounded-md bg-[#F9F9F9] outline-none ">
        <option>Select Bank</option>
        <option>Bank 1</option>
        <option>Bank 2</option>
      </select>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-col sm:flex-row gap-2">
    {/* IFSC Code */}
    <div className="relative w-full">
      <img
        src={img_3}
        alt="IFSC"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        className="border px-2 py-4 pl-10 w-full rounded-md bg-[#F9F9F9] outline-none"
        placeholder="Enter Your IFSC Code"
      />
    </div>

    {/* Account Number */}
    <div className="relative w-full">
      <img
        src={img_3}
        alt="Account"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        className="border px-2 py-4 pl-10 w-full rounded-md bg-[#F9F9F9] outline-none"
        placeholder="Enter Your Account Number"
      />
    </div>
  </div>

  {/* Confirm Account Number */}
  <div className="relative w-full">
    <img
      src={img_3}
      alt="Confirm"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
    <input
      className="border px-2 py-4 pl-10 w-full rounded-md bg-[#F9F9F9] outline-none"
      placeholder="Confirm Your Account Number"
    />
  </div>
</div>

        <div className="mt-4 flex justify-end gap-4">
          <button onClick={onClose} className="hover:border py-2 px-4 rounded-md">
            Cancel
          </button>
          <button
            onClick={() => {
              setIsClicked(true);
            }}
            className="bg-[#213C70] text-white py-2 px-6 rounded-md"
          >
            Continue
          </button>

          <PaymentModal
            isClick={isClicked}
            onClose={() => setIsClicked(false)
                
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsModal;

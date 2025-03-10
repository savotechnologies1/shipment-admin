import React from "react";
import { useForm } from "react-hook-form";
import profile from "../../assets/userProfile.png";

const AffiliateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Profile Data:", data);
  };

  return (
    <div className="p-4 sm:p-7">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src={profile} alt="Profile" className="w-14 sm:w-16" />
        <h1 className="text-2xl sm:text-4xl font-bold text-[#213C70] text-center sm:text-left">
          Profile
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        {/* Channel & Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="font-semibold">Channel:</label>
            <input
              {...register("channel", { required: "Channel is required" })}
              type="text"
              placeholder="Example: Jovixeen001"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Platform:</label>
            <input
              {...register("platform", { required: "Platform is required" })}
              type="text"
              placeholder="YouTube - Instagram"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="font-semibold">First Name:</label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="Full Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Last Name:</label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold">Email:</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Email Address"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold">Mobile Number:</label>
            <input
              {...register("mobile")}
              type="text"
              placeholder="Enter Mobile Number"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
        </div>

        {/* Codes & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="font-semibold">Active Code:</label>
            <input
              {...register("activeCode")}
              type="text"
              placeholder="Active Code"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Discount:</label>
            <input
              {...register("discount")}
              type="text"
              placeholder="Discount"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
            />
          </div>

          <div>
            <label className="font-semibold">Active Date:</label>
            <input
              {...register("activeDate", { required: "Active Date is required" })}
              type="date"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] text-gray-600"
            />
          </div>
          <div>
            <label className="font-semibold">Inactive Date:</label>
            <input
              {...register("inactiveDate", { required: "Inactive Date is required" })}
              type="date"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] text-gray-600"
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white p-6 rounded-2xl mt-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Account Holder Name:</label>
              <input
                {...register("holderName")}
                type="text"
                placeholder="Bank Account Holder Name"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
              />
            </div>

            <div>
              <label className="font-semibold">Select Bank:</label>
              <select
                {...register("bankName")}
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] text-gray-600"
              >
                <option value="">Select Bank</option>
                <option value="Swizz Bank">Swizz Bank</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="font-semibold">Bank Account Number:</label>
              <input
                {...register("accountNumber")}
                type="text"
                placeholder="Bank Account Number"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
              />
            </div>

            <div>
              <label className="font-semibold">IFSC Code:</label>
              <input
                {...register("ifscCode")}
                type="text"
                placeholder="IFSC Code"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="w-full sm:w-80 py-3 bg-[#213C70] text-white text-lg rounded-md hover:bg-[#1a2e57] transition">
            Save All Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AffiliateProfile;

import React from "react";
import { useForm } from "react-hook-form";
import img from "../assets/address.png";

const AddressBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-4 md:p-7">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <img src={img} alt="Address Book" className="w-8 h-8 md:w-12 md:h-12" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#213C70]">
          Address Book
        </h1>
      </div>

      {/* Card Container */}
      <div className="mt-4 bg-white p-6 w-full rounded-2xl shadow-md">
        {/* Title & Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="font-bold text-xl md:text-2xl">Add Address</h1>
          <div className="flex flex-col sm:flex-row gap-4 text-lg text-white w-full sm:w-auto">
            <button className="bg-[#213C70] px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
              Sender List
            </button>
            <button className="bg-[#3D5EDB] px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
              Recipient List
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Address Input */}
          <div className="mt-2">
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              placeholder="Enter Sender Address"
              className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Grid Layout for Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {/* Block/Building */}
            <div>
              <input
                {...register("Block/Building", { required: "Required" })}
                type="text"
                placeholder="Block/Building"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
              />
              {errors["Block/Building"] && (
                <p className="text-red-500 text-sm">
                  {errors["Block/Building"].message}
                </p>
              )}
            </div>

            {/* Floor */}
            <div>
              <input
                {...register("Floor", { required: "Required" })}
                type="text"
                placeholder="Floor"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
              />
              {errors.Floor && (
                <p className="text-red-500 text-sm">{errors.Floor.message}</p>
              )}
            </div>

            {/* Unit */}
            <div>
              <input
                {...register("Unit", { required: "Required" })}
                type="text"
                placeholder="Unit"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
              />
              {errors.Unit && (
                <p className="text-red-500 text-sm">{errors.Unit.message}</p>
              )}
            </div>
          </div>

          {/* Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <input
                {...register("FullName", { required: "Full Name is required" })}
                type="text"
                placeholder="Sender Full Name"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
              />
              {errors.FullName && (
                <p className="text-red-500 text-sm">{errors.FullName.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                type="number"
                placeholder="Sender Phone Number"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Email Address"
              className="border py-3 px-4 rounded-md w-full placeholder:text-gray-500 bg-[#F9F9F9] font-semibold"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-[#213C70] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressBook;

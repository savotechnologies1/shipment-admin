import React from "react";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../assets/address.png";

const NewBooking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="p-2 md:p-7 ">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#213C70]">Address Book </h1>
      </div>

      <div className="mt-4 bg-white p-6 w-full rounded-2xl mx-auto ">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            {" "}
            <h1 className="font-bold text-xl md:text-2xl">Add Address</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-lg text-white">
            <div className="bg-[#213C70] px-3 py-2 rounded-md text-sm sm:font-medium cursor-pointer">
              <p>Sender List</p>
            </div>
            <div className="bg-[#3D5EDB] px-3 py-2 rounded-md text-sm sm:font-medium cursor-pointer">
              <p>Recipient List</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-4">
            <div className="mt-2 ">
              <input
                {...register("address", { required: "address is required" })}
                type="text"
                placeholder="Enter Sender Address"
                className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">
                  {String(errors.address.message)}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="mt-2 w-full mb-6">
             
              <div className=" mt-2">
                <input
                  {...register("Block/Building", {
                    required: "Block/Building is required",
                  })}
                  type="text"
                  placeholder="Block/Building"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.Block && (
                  <p className="text-red-500 text-sm">
                    {String(errors.Block.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 w-full mb-6">
              {" "}
            
              <div className="mt-2">
                <input
                  {...register("Floor", { required: "Floor is required" })}
                  type="text"
                  placeholder="Floor"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.Floor && (
                  <p className="text-red-500 text-sm">
                    {String(errors.Floor.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 w-full mb-6">
              {" "}
            
              <div className="mt-2">
                <input
                  {...register("Unit", { required: "Unit is required" })}
                  type="text"
                  placeholder="Unit"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.Unit && (
                  <p className="text-red-500 text-sm">
                    {String(errors.Unit.message)}
                  </p>
                )}
              </div>
            </div>
          </div>

        

          <div className="flex flex-col items-center sm:flex-row gap-4 mt-2 mb-6">
            <div className="sm:w-1/2 ">
            
              <div className="mt-2">
                {" "}
                <input
                  {...register("FullName", { required: "Full Name is required" })}
                  type="text"
                  placeholder=" Sender Full Name"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.FullName && (
                  <p className="text-red-500 text-sm">
                    {String(errors.FullName.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:w-1/2">
            
                
          
              <div className="mt-2">
                <input
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  type="number"
                  placeholder="Sender Phone Number"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {String(errors.phoneNumber.message)}
                  </p>
                )}
              </div>
            </div>
          </div>


          <div className="mt-2 w-full mb-6">
            {" "}
         
            <div className="mt-2">
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Email Address"
                className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
              />
            </div>
          </div>
         


         
        </form>
      </div>
    </div>
  );
};

export default NewBooking;

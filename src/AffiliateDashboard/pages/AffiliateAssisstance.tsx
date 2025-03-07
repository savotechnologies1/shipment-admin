import React from "react";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../../assets/address.png";

const AffiliateAssisstance = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="p-7 ">
      <div className="flex  items-center gap-2">
        <img src={img} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">Address Book </h1>
      </div>

      <div className="mt-4 bg-white p-6 w-full rounded-2xl mx-auto ">
        <div>
          {" "}
          <h1 className="font-bold text-2xl">Contact Us Form </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center sm:flex-row gap-4 mt-2 mb-6">
            <div className="sm:w-1/2 ">
              <div className="mt-2">
                {" "}
                <input
                  {...register("FullName", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
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
                  {...register("LastName", {
                    required: "LastName is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
                />
                {errors.LastName && (
                  <p className="text-red-500 text-sm">
                    {String(errors.LastName.message)}
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
          <div className="w-full mt-4">
            <div className="mt-2 ">
              <input
                {...register("mobilenumber", { required: "Mobile Number is required" })}
                type="number"
                placeholder="Enter Mobile Number "
                className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
              />
              {errors.mobilenumber && (
                <p className="text-red-500 text-sm">
                  {String(errors.mobilenumber.message)}
                </p>
              )}
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="mt-2 ">
              <input
                {...register("message", { required: "Message is required" })}
                type="text"
                placeholder="Leave a Message "
                className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold "
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.message.message)}
                </p>
              )}
            </div>
          </div>



         <div className="flex items-center justify-center mt-6"><button className="px-40 py-4 bg-[#213C70] text-white text-semibold rounded-md text-lg">Send Message</button></div> 
        </form>
      </div>
    </div>
  );
};

export default AffiliateAssisstance;

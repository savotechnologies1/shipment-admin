import React from "react";
import { useForm } from "react-hook-form";
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
    <div className="p-4 ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <img src={img} alt="Address" className="w-12 h-12 sm:w-16 sm:h-16" />
        <h1 className="text-2xl sm:text-4xl font-bold text-[#213C70] text-center sm:text-left">
          Address Book
        </h1>
      </div>

      {/* Form Container */}
      <div className="mt-4 bg-white p-4 sm:p-6 w-full  mx-auto rounded-2xl shadow-md">
        <h1 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
          Contact Us Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Name Inputs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                {...register("FullName", { required: "Full Name is required" })}
                type="text"
                placeholder="Full Name"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-600 bg-[#F9F9F9] font-medium"
              />
              {errors.FullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.FullName.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                {...register("LastName", { required: "Last Name is required" })}
                type="text"
                placeholder="Last Name"
                className="border py-3 px-4 rounded-md w-full placeholder:text-gray-600 bg-[#F9F9F9] font-medium"
              />
              {errors.LastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.LastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Email Address"
              className="border py-3 px-4 rounded-md w-full placeholder:text-gray-600 bg-[#F9F9F9] font-medium"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="mt-4">
            <input
              {...register("mobilenumber", {
                required: "Mobile Number is required",
              })}
              type="number"
              placeholder="Enter Mobile Number"
              className="border py-3 px-4 rounded-md w-full placeholder:text-gray-600 bg-[#F9F9F9] font-medium"
            />
            {errors.mobilenumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobilenumber.message}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Leave a Message"
              rows="4"
              className="border py-3 px-4 rounded-md w-full placeholder:text-gray-600 bg-[#F9F9F9] font-medium"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-6">
            <button className="w-full sm:w-auto px-10 py-3 bg-[#213C70] text-white font-semibold rounded-md text-lg hover:bg-[#1a2e57] transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AffiliateAssisstance;

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
    <div className="p-7">
      <div className="flex flex-row items-center gap-4">
        <img src={profile} alt="" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70] mb-4">Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Channel & Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="font-semibold">Channel:</label>
            <input
              {...register("channel", { required: "Channel is required" })}
              type="text"
              placeholder="Example: Jovixeen001"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black "
            />
          </div>
          <div>
            <label className="font-semibold">Platform:</label>
            <input
              {...register("platform", { required: "Platform is required" })}
              type="text"
              placeholder="YouTube - Instagram"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
            />
          </div>
        </div>

        {/* Personal Information */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="font-semibold">Channel:</label>
            <input
              {...register("channel_1", { required: "Channel is required" })}
              type="text"
              placeholder="Example: Jovixeen001"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
            />
          </div>
          <div>
            <label className="font-semibold">Platform:</label>
            <input
              {...register("platform_1", { required: "Platform is required" })}
              type="text"
              placeholder="YouTube - Instagram"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
            />
          </div>

          <div>
            <input
              {...register("firstName")}
              type="text"
              placeholder="Full Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black font-semibold"
            />
          </div>
          <div>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black font-semibold"
            />
          </div>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter Email Address"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] mt-4 placeholder-black font-semibold"
          />
          <input
            {...register("mobile")}
            type="text"
            placeholder="Enter Mobile Number"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] mt-4 placeholder-black font-semibold"
          />

          {/* Codes & Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              {...register("activeCode")}
              type="text"
              placeholder="Active Code"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black font-semibold"
            />
            <input
              {...register("discount")}
              type="text"
              placeholder="Discount"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black font-semibold"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <input
    {...register("activeDate", { required: "Active Date is required" })}
    type="date"
    className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] text-black font-semibold"
  />

  <input
    {...register("inactiveDate", { required: "Inactive Date is required" })}
    type="date"
    className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] text-black font-semibold"
  />
</div>

        </div>

        {/* Bank Details */}

        <div className="bg-white p-6 rounded-2xl mt-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
            <div>
              <label className="font-semibold">Bank account Holder Name:</label>
              <input
                {...register("holderName")}
                type="text"
                placeholder="Bank account Holder Name"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
              />
            </div>

            <div>
              <label className="font-semibold">Select Bank :</label>
              <select
                {...register("bankName")}
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
              >
                <option value="">Select Bank</option>
                <option value="Swizz Bank">Swizz Bank</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
            <div>
              <label className="font-semibold">Bank account Number:</label>

              <input
                {...register("accountNumber")}
                type="text"
                placeholder="Bank account Number"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
              />
            </div>

            <div>
              {" "}
              <label className="font-semibold">IFSC Code:</label>{" "}
              <input
                {...register("ifscCode")}
                type="text"
                placeholder="IFSC Code"
                className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] placeholder-black"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-[322px] py-3 mt-6 bg-[#213C70] text-white text-lg rounded-md">
          Save All Changes
        </button>
      </form>
    </div>
  );
};

export default AffiliateProfile;

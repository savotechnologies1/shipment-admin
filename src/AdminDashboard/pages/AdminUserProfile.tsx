import React from "react";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import img from "../../assets/userProfile.png";
import profile from "../../assets/profileimg.png";
import edit from "../../assets/edit (2).png";

const AdminUserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const firstname = watch("FirstName", "");
  const lastname = watch("LastName", "");
  const email = watch("email", "");
  const password = watch("NewPassword", "");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-4 sm:p-7">
      {/* Header */}
      <div className="flex items-center gap-2">
        <img src={img} alt="User Profile" className="w-10 h-10 sm:w-14 sm:h-14" />
        <h1 className="text-2xl sm:text-4xl font-bold text-[#213C70]">User Profile</h1>
      </div>

      {/* User Info Section */}
      <div className="mt-4 bg-white p-4 sm:p-6 w-full rounded-2xl mx-auto shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            <img className="w-[70px] sm:w-[85px]" src={profile} alt="Profile" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {firstname || "RobertFox001"}
              </h1>
              <p className="text-[#213C70] text-sm">Admin Account</p>
            </div>
          </div>
        </div>

        {/* Display Live Updates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{firstname || "First Name"}</p>
          </div>
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{lastname || "Last Name"}</p>
          </div>
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{email || "Email Address"}</p>
          </div>
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{password || "Password"}</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="mt-8 bg-white p-4 sm:p-6 w-full rounded-2xl mx-auto shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <img src={edit} alt="Edit" className="w-6 sm:w-8" />
          <p className="text-2xl sm:text-3xl font-bold">Edit Profile</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              {...register("FirstName", { required: "First Name is required" })}
              type="text"
              placeholder="First Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold placeholder-black"
            />
            <input
              {...register("LastName", { required: "Last Name is required" })}
              type="text"
              placeholder="Last Name"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold placeholder-black"
            />
          </div>

          {/* Email */}
          <input
            {...register("email")}
            type="email"
            placeholder="Enter Email Address"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold mt-4 placeholder-black"
          />

          {/* Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <input
              {...register("OldPassword", {
                required: "Old Password is required",
              })}
              type="password"
              placeholder="Old Password"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold placeholder-black"
            />
            <input
              {...register("NewPassword", {
                required: "New Password is required",
              })}
              type="password"
              placeholder="New Password"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold placeholder-black"
            />
            <input
              {...register("ConfirmNewPassword", {
                required: "Confirm Password is required",
              })}
              type="password"
              placeholder="Confirm New Password"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold placeholder-black"
            />
          </div>

          <button className="mt-6 bg-[#3D5EDB] px-6 py-3 text-lg text-white rounded-md w-full sm:w-auto">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUserProfile;

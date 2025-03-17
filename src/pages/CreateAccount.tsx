import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail, MdPassword, MdPersonOutline } from "react-icons/md";
import fb from "../assets/fb_icon.png";
import shipment1 from "../assets/image1.png";
import insta from "../assets/insta_iocn.png";
import logo from "../assets/logo.png";
import yt from "../assets/yt_iocn.png";
import useUserSignUp from "./http/useUserSignUp";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useUserSignUp();
  const [selectedRole, setSelectedRole] = useState("");

  const onSubmit = (data: unknown) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2 mt-5 flex items-center justify-center md:max-h-[95vh] md:h-[95vh] md:overflow-y-auto relative">
        <div className="max-w-md w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img className="w-[272px] h-[86px]" src={logo} alt="" />
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-center ">
              Create Your Account
            </h2>
            <p className="pt-2 text-sm mb-6">
              Get Started by Creating your new Account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2 relative">
              <MdPersonOutline
                size={23}
                className="absolute text-gray-400 left-2 top-3.5 items-center"
              />

              <input
                type="text"
                {...register("name", {
                  required: "Full Name is required",
                  minLength: {
                    value: 2,
                    message: "Full Name must be 2+ characters",
                  },
                })}
                placeholder="Full Name"
                className="w-full border-[#a2c6e9] py-3 px-9 rounded-md border"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.name.message)}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 relative">
              <MdOutlineEmail
                size={20}
                className="absolute text-gray-400 left-2 top-4 items-center"
              />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
                className="w-full border-[#a2c6e9] py-3 px-9 rounded-md  border"
              />

              {errors.email && typeof errors.email.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 relative">
              <BsTelephone
                size={20}
                className="absolute text-gray-400 left-2 top-4 items-center"
              />
              <div className="md:w-full">
                <input
                  type="number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  placeholder="Phone Number"
                  className="w-full border-[#a2c6e9] py-3 px-9 rounded-md border"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.phone.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <p className="text-sm text-gray-500">Select Account: </p>

              <div className="flex gap-2 items-center flex-wrap">
                {[
                  { value: "user_v1", label: "User Dashboard" },
                  { value: "affiliate_v1", label: "Affiliate Dashboard" },
                  { value: "both", label: "Both" },
                ].map((role) => (
                  <label
                    key={role.value}
                    className={`flex gap-2 items-center text-[9px] p-1 rounded-md cursor-pointer border ${
                      selectedRole === role.value
                        ? "bg-[#213C70] text-white border-[#213C70]"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      value={role.value}
                      {...register("role", { required: "Role is required" })}
                      onChange={() => setSelectedRole(role.value)}
                      className="accent-[#213C70]"
                    />
                    {role.label}
                  </label>
                ))}
              </div>

              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.role.message)}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 relative">
              <MdPassword
                size={20}
                className="absolute text-gray-400 left-2 top-4 items-center"
              />

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8+ characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!])[A-Za-z\d@#$!]+$/,
                    message:
                      "Password must be alphanumeric with 1 special character (@, #, $, !)",
                  },
                })}
                placeholder="Password"
                className="w-full border-[#a2c6e9] py-3 px-9 rounded-md border"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 relative">
              <MdPassword
                size={20}
                className="absolute left-2 top-4 text-gray-400 items-center"
              />
              <input
                type="text"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") ||
                    "Confirm Password do not match",
                })}
                placeholder="Confirm Password"
                className="w-full border-[#a2c6e9] py-3 px-9 rounded-md border"
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.confirmPassword.message)}
                </p>
              )}
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <p>Remember me </p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md  "
            >
              {isPending ? "Loading..." : "Sign Up"}
            </button>
            <div className="text-center mt-4">
              Already have an Account?
              <a
                href="/sign-in"
                className="text-[#213C70] border-[#213C70] border-b font-semibold ml-1"
              >
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-1/2   w-full items-end relative ">
        <img
          src={shipment1}
          alt="Containers"
          className=" object-cover p-4 w-full h-full  2xl:h-[920px] "
        />
        <div className="absolute right-0 top-4">
          <p className="font-bold text-2xl text-white">spediamofacile.it</p>
        </div>

        <div className="absolute left-6 bottom-16">
          <p className=" text-2xl text-white">Social Media Links</p>

          <div className="flex gap-4">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={yt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

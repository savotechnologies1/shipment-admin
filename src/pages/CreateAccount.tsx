import { useForm } from "react-hook-form";
import icon2 from "../assets/email_icon.png";
import fb from "../assets/fb_icon.png";
import shipment1 from "../assets/image1.png";
import insta from "../assets/insta_iocn.png";
import logo from "../assets/logo.png";
import icon4 from "../assets/password_icon.png";
import icon3 from "../assets/phone_icon.png";
import icon1 from "../assets/profile_icon.png";
import yt from "../assets/yt_iocn.png";
import useUserSignUp from "./http/useUserSignUp";
import { useState } from "react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useUserSignUp();
  const [selectedRole, setSelectedRole] = useState("");

  const onSubmit = (data: unknown) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2   flex items-center justify-center  relative">
        <div className=" absolute top-6 right-0 xl:right-6 hidden lg:block"></div>
        <div className="max-w-md w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img className="w-[272px] h-[86px]" src={logo} alt="" />
            </div>
            <h2 className="text-xl md:text-4xl  font-bold  text-center ">
              Create Your Account
            </h2>
            <p className="pt-2 text-xl mb-6">
              Get Statred by Creating your new Account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative items-center ">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon1} alt="" />
              </div>
              <div className="md:w-full">
                <div className="items-center ">
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 6,
                        message: "",
                      },
                    })}
                    placeholder="Full Name"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border "
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.name.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 mt-4 relative">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon2} alt="" />
              </div>
              <div className="items-center ">
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
                  className="w-full  border-[#a2c6e9] py-3 px-10 rounded-md  text-gray-400 border"
                />
              </div>
              {errors.email && typeof errors.email.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon3} alt="" />
              </div>
              <div className="md:w-full">
                <div className=" items-center ">
                  <input
                    type="number"
                    {...register("phone", {
                      required: "number is required",
                      minLength: {
                        value: 6,
                        message: "number must be at least 6 characters",
                      },
                    })}
                    placeholder="Phone Number"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border"
                  />
                </div>
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
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon4} alt="" />
              </div>
              <div className="md:w-full">
                <div className=" items-center ">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Password"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.password.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon4} alt="" />
              </div>
              <div className="md:w-full">
                <div className=" items-center ">
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Confirm Password"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.confirmPassword.message)}
                  </p>
                )}
              </div>
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
            <div className="text-center mt-4  ">
              Already have an Account?
              <a
                href="/sign-up"
                className="text-[#213C70] border-[#213C70] border-b font-semibold "
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

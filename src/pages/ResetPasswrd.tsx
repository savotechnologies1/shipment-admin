import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import shipment1 from "../assets/image1.png";
import icon4 from "../assets/password_icon.png";
import fb from "../assets/fb_icon.png";
import insta from "../assets/insta_iocn.png";
import yt from "../assets/yt_iocn.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Dummy submission function (for now, just logs the data)
  const onSubmit = (data: unknown) => {
    console.log("Submitted data:", data);
    // Handle further logic if needed (e.g., navigate, show success message, etc.)
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2   flex items-center justify-center  relative">
        <div className="max-w-lg w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl  font-bold  text-center ">
              Reset Password
            </h2>
            <p className="pt-2 text-xl mb-6">
              Enter your new password and confirm new password. Fill the Details
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative mb-4">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon4} alt="" />
              </div>
              <div className="md:w-full">
                <div className=" items-center ">
                  <input
                    type="password"
                    {...register("Password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "number must be at least 6 characters",
                      },
                    })}
                    placeholder="New Password"
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
                        message: "password must be at least 6 characters",
                      },
                    })}
                    placeholder="Confirm New Password"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border"
                  />
                </div>
                {errors.confirm_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.confirm_password.message)}
                  </p>
                )}
              </div>
            </div>

            {/* Sign In Button */}
            <NavLink to={"/sign-in"}> <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md  mt-8 "
            >
              Send OTP
            </button></NavLink>
           

        
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

          <div className="flex gap-4 mb-2">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={yt} alt="" />
          </div>

          <div className="flex items-start justify-start ">
            <button className="px-6 rounded-xl bg-[#213C70] text-white text-xl ">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

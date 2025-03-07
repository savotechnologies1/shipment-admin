import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import shipment1 from "../assets/image1.png";
import icon1 from "../assets/profile_icon.png";
import icon2 from "../assets/email_icon.png";
import icon3 from "./assets/phone_icon.png";
import icon4 from "./assets/password_icon.png";
import fb from "../assets/fb_icon.png";
import insta from "../assets/insta_iocn.png";
import yt from "../assets/yt_iocn.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const ForgetPassword = () => {
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
              Forget Password
            </h2>
            <p className="pt-2 text-xl mb-6">
              Enter your Email for the verification process, we will send 4
              Digit code to your Email
            </p>

            <div className="flex items-center justify-center mb-4">
              <div className="text-white bg-[#213C70] px-4 py-2 rounded-md text-xl cursor-pointer">
                Email
              </div>
              <div className="  px-4 py-2 text-xl cursor-pointer">Mobile Number</div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 mt-4 relative">
              <div className="absolute left-2 top-2 items-center  ">
                <img src={icon2} alt="" />
              </div>
              <div className="  items-center ">
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

            {/* Sign In Button */}
            <NavLink to="/otp">
            <button
            
            type="submit"
            className="w-full bg-[#213C70] text-white p-3 rounded-md  "
          >
            Send OTP
          </button>
            </NavLink>
         

            <p className="text-center mt-2 ">Or Login With</p>

            <div className="flex justify-between mt-4">
              <div className="border px-4 py-1 rounded-md flex gap-2">
                <img src={google} alt="" />
                Google
              </div>
              <div className="border px-4 py-1 rounded-md flex gap-2 ">
                <img src={facebook} alt="" />
                Facebook
              </div>
            </div>

            <div className="text-center mt-4  ">
              Remember Password?
              <a
                href="/sign-up"
                className="text-[#213C70] border-[#213C70] border-b font-semibold "
              >
                Log in
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

export default ForgetPassword;

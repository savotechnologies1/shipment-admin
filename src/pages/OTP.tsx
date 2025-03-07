import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import shipment1 from "../assets/image1.png";

import fb from "../assets/fb_icon.png";
import insta from "../assets/insta_iocn.png";
import yt from "../assets/yt_iocn.png";

const OTP = () => {
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
        <div className="max-w-md w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl  font-bold  text-center ">
              OTP Verification
            </h2>
            <p className="pt-2 text-xl mb-6">
              Enter 4 digits code we have sent you on your Email / Phone Number
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-4 mb-4 justify-center ">
              <div className="p-6 border border-[#EDEDED] rounded-md"></div>
              <div className="p-6 border border-[#EDEDED] rounded-md"></div>
              <div className="p-6 border border-[#EDEDED] rounded-md"></div>
              <div className="p-6 border border-[#EDEDED] rounded-md"></div>
            </div>

            <div className="flex items-center  justify-center mb-4">
              <p>00:30</p>
            </div>

            {/* Sign In Button */}
            <NavLink to={"/resetpassword"}>
              {" "}
              <button
                type="submit"
                className="w-full bg-[#213C70] text-white p-3 rounded-md  "
              >
                Continue
              </button>
            </NavLink>

            <div className="text-center mt-4  ">
              If you did’t receive a code!
              <a
                href="/sign-up"
                className="text-[#213C70] border-[#213C70] border-b font-semibold "
              >
                Resend
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

export default OTP;

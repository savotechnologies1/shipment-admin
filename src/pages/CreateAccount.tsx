import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import shipment1 from "../assets/image1.png";
import icon1 from "../assets/profile_icon.png";
import icon2 from "../assets/email_icon.png";
import icon3 from "../assets/phone_icon.png";
import icon4 from "../assets/password_icon.png";
import fb from "../assets/fb_icon.png";
import insta from "../assets/insta_iocn.png";
import yt from "../assets/yt_iocn.png";

const SignIn = () => {
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
                <div className=" items-center ">
                  <input
                    type="text"
                    {...register("fullname", {
                      required: "name is required",
                      minLength: {
                        value: 6,
                        message: "",
                      },
                    })}
                    placeholder="Full Name"
                    className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border "
                  />
                </div>
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.fullname.message)}
                  </p>
                )}
              </div>
            </div>
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

            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
            <div className="absolute left-2 top-2 items-center  ">
                <img src={icon3} alt="" />

              </div>
              <div className="md:w-full">
                <div className=" items-center ">
                  <input
                    type="nuumber"
                    {...register("Phone Number", {
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
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.number.message)}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 relative">
            <div className="absolute left-2 top-10 items-center  ">
                <img src={icon4} alt="" />

              </div>
              <div>
                <p className="text-sm text-gray-500">Select Account: </p>
              </div>
              <div>
                <p className="text-[9px] bg-[#213C70] text-white p-1 rounded-md">
                  User Dashboard
                </p>
              </div>
              <div>
                <p className="text-[9px] border border-gray-200 p-1 rounded-md">
                  Affiliate Dashboard
                </p>
              </div>
              <div>
                <p className="text-[9px]  border border-gray-200 p-1 rounded-md">
                  Both
                </p>
              </div>
            </div>
            <div></div>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
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
                        message: "password must be at least 6 characters",
                      },
                    })}
                    placeholder="Confirm Password"
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
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-center items-center ">
                <input type="checkbox" />
                <p>Remember me </p>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md  "
            >
              Log in
            </button>

            <div className="text-center mt-4  ">
              Already have an Account?
              <a
                href="/sign-up"
                className="text-[#213C70] border-[#213C70] border-b font-semibold "
              >
                Sign in
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

        <div className="absolute left-6 bottom-16"><p className=" text-2xl text-white">Social Media Links</p>

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

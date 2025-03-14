import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import email from "../assets/email_icon.png";
import facebook from "../assets/facebook.png";
import fb from "../assets/fb_icon.png";
import google from "../assets/google.png";
import insta from "../assets/insta_iocn.png";
import logo from "../assets/logo.png";
import password from "../assets/password_icon.png";
import shipment1 from "../assets/shipment1.jpg";
import yt from "../assets/yt_iocn.png";
import useAdminSignIn from "./http/useAdminSignIn";

const AdminSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useAdminSignIn();

  const onSubmit = (data: unknown) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2 max-h-[100vh] my-10 pt-10 overflow-y-auto flex items-center justify-center relative">
        <div className="max-w-md w-full px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img className="h-[86px]" src={logo} alt="" />
            </div>
            <h2 className="text-3xl  font-bold  text-center ">
              Log in to your Account
            </h2>
            <p className="pt-2 text-base">
              Welcome Back! Select method to log in:
            </p>

            <div className="flex justify-between mt-4">
              <div className="border px-4 py-1 rounded-md flex gap-2 cursor-pointer">
                <img src={google} alt="" />
                Google
              </div>
              <div className="border px-4 py-1 rounded-md flex gap-2  cursor-pointer">
                <img src={facebook} alt="" />
                Facebook
              </div>
            </div>

            <div className="py-6 flex gap-4 justify-center items-center">
              <p className="text-gray-600 text-sm">Or Continue With E-mail</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 mt-4 relative items-center">
              <img src={email} className="absolute top-2 left-2" alt="" />

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
                className="w-full border-[#a2c6e9] p-3 rounded-md border pl-10"
              />

              {errors.email && typeof errors.email.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 relative">
              <img src={password} className="absolute top-2 left-2" alt="" />

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
                className="w-full border-[#a2c6e9] p-3 rounded-md border pl-10"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            <div className="flex justify-end items-center my-2">
              <Link
                to="/admin/resetpassword"
                className="text-sm text-[#213C70]  text-right md:text-right "
              >
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md  "
            >
              {isPending ? "Loading..." : "Sign In"}
            </button>

            <NavLink to={"/sign-in"}>
              <span className="flex justify-center items-center bg-[#213C70] text-white w-1/2 mx-auto mt-8 p-2 rounded-md cursor-pointer">
                Login User Panel
              </span>
            </NavLink>
          </form>
        </div>
      </div>
      <div className="md:w-1/2  relative w-full items-end">
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
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;

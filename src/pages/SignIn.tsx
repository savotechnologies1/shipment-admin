import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import shipment1 from "../assets/shipment1.jpg";
import setting from "../assets/ic-settings.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email_icon.png";
import password from "../assets/password_icon.png";
import fb from "../assets/fb_icon.png";
import insta from "../assets/insta_iocn.png";
import yt from "../assets/yt_iocn.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: { email: string; password: string }) => {
    // Dummy authentication (replace with API call)
    const users = [
      { email: "user@example.com", password: "user123", role: "user" },
      {
        email: "affiliate@example.com",
        password: "affiliate123",
        role: "affiliate",
      },
      { email: "admin@example.com", password: "admin123", role: "admin" },
    ];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      localStorage.setItem("role", user.role); // Store role
      navigate(
        user.role === "admin"
          ? "/admin-dashboard"
          : user.role === "affiliate"
          ? "/dashboard/earnings"
          : "/shipment"
      );
    } else {
      alert("Invalid credentials!");
    }
  };

  const role = localStorage.getItem("role");

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2   flex items-center justify-center  relative">
        <div className=" absolute top-6 right-0 xl:right-6 hidden lg:block"></div>
        <div className="max-w-md w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img className="w-[272px] h-[86px]" src={logo} alt="" />
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
              <div className="absolute top-2 left-2">
                <img src={email} alt="" />
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
                  className="w-full  border-[#a2c6e9] p-3 rounded-md  text-gray-400 border pl-14"
                />
              </div>
              {errors.email && typeof errors.email.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2 relative">
              <div className="absolute top-2 left-2">
                <img src={password} alt="" />
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
                    className="w-full border-[#a2c6e9] p-3 rounded-md   text-gray-400 border pl-14"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.password.message)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-center items-center ">
                <input type="checkbox" />
                <p>Remember me </p>
              </div>
              <div className="  text-right justify-center items-center ">
                <Link
                  to="/forgetpassword"
                  className="text-sm text-[#213C70]  text-right md:text-right "
                >
                  Forget Password?
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md  "
            >
              Log in
            </button>

            <div className="text-center mt-4 ">
              Don’t have an account?
              <a
                href="/create-account"
                className="text-[#213C70] font-semibold border-b border-[#213C70]"
              >
                Create Account
              </a>
            </div>
            <NavLink to={"/sign-in"}>
              <div className="flex justify-center items-center bg-[#213C70] text-white w-1/2 mx-auto mt-8 p-2 rounded-md cursor-pointer">
                <span>Login Admin Panel</span>
              </div>
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

export default SignIn;

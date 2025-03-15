import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import icon2 from "../assets/email_icon.png";
import facebook from "../assets/facebook.png";
import fb from "../assets/fb_icon.png";
import google from "../assets/google.png";
import shipment1 from "../assets/image1.png";
import insta from "../assets/insta_iocn.png";
import icon4 from "../assets/password_icon.png";
import yt from "../assets/yt_iocn.png";
import useSendOTP from "./http/useSendOTP";
import useResendOTP from "./http/useResendOTP";
import useValidateOTP from "./http/useValidateOTP";
import useResetPassword from "./http/useResetPassword";

const UserResetPasword = () => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <>
      {tab === 0 && <ForgetPassword setTab={setTab} setEmail={setEmail} />}
      {email && tab === 1 && <OTP setTab={setTab} email={email} />}
      {email && tab === 2 && <ResetPassword setTab={setTab} email={email} />}
    </>
  );
};

const ForgetPassword = ({
  setTab,
  setEmail,
}: {
  setTab: (tab: number) => void;
  setEmail: (email: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useSendOTP(setTab);

  const onSubmit = (data: unknown) => {
    mutate(data);
    setEmail(data.email);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2   flex items-center justify-center  relative">
        <div className="max-w-lg w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl  font-bold  text-center ">
              Forget Password
            </h2>
            <p className="pt-2 text mb-4">
              Enter your Email for the verification process, we will send 6
              digit code to your Email
            </p>

            {/* <div className="flex items-center justify-center mb-4">
              <div className="text-white bg-[#213C70] px-4 py-2 rounded-md text-xl cursor-pointer">
                Email
              </div>
              <div className="  px-4 py-2 text-xl cursor-pointer">
                Mobile Number
              </div>
            </div> */}
          </div>

          <form
            className="flex flex-col relative"
            onSubmit={handleSubmit(onSubmit)}
          >
            <img
              src={icon2}
              className="absolute left-2 top-2.5 items-cente"
              alt=""
            />

            <div className="mb-4 items-center">
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
                className="w-full outline-none border-[#a2c6e9] py-3 px-10 rounded-md border"
              />
            </div>
            {errors.email && typeof errors.email.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full text-center cursor-pointer bg-[#213C70] text-white p-3 rounded-md"
            >
              {isPending ? "Loading..." : "Send OTP"}
            </button>

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

const OTP = ({ setTab, email }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useValidateOTP(setTab);
  const { mutate: resendMutate } = useResendOTP();
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    if (canResend) {
      setTimer(60);
      setCanResend(false);

      const data = { email: email };
      resendMutate(data);
    }
  };

  const onSubmit = (data) => {
    const newData = { ...data, email };
    mutate(newData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF]">
      <div className="md:w-1/2 flex items-center justify-center relative">
        <div className="max-w-md w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl font-bold">OTP Verification</h2>
            <p className="pt-2 mb-4">
              Enter the 6-digit code sent to your Email / Phone Number
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              {...register("otp", { required: "OTP is required" })}
              placeholder="Enter OTP"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
            />

            <div className="flex items-center justify-center mb-4">
              {timer > 0
                ? `Time Left: 00:${timer < 10 ? `0${timer}` : timer}`
                : ""}
            </div>

            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Continue"}
            </button>

            <div className="text-center mt-4">
              If you didn't receive a code!
              <button
                className={`text-[#213C70] border-b border-[#213C70] font-semibold ml-1 ${
                  canResend ? "cursor-pointer" : "opacity-50"
                }`}
                onClick={handleResend}
                disabled={!canResend}
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="md:w-1/2 w-full items-end relative">
        <img
          src={shipment1}
          alt="Containers"
          className="object-cover p-4 w-full h-full 2xl:h-[920px]"
        />
        <div className="absolute right-0 top-4">
          <p className="font-bold text-2xl text-white">spediamofacile.it</p>
        </div>

        <div className="absolute left-6 bottom-16">
          <p className="text-2xl text-white">Social Media Links</p>

          <div className="flex gap-4 mb-2">
            <img src={fb} alt="Facebook" />
            <img src={insta} alt="Instagram" />
            <img src={yt} alt="YouTube" />
          </div>

          <div className="flex items-start justify-start">
            <button className="px-6 rounded-xl bg-[#213C70] text-white text-xl">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResetPassword = ({
  setTab,
  email,
}: {
  setTab: (tab: number) => void;
  email: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useResetPassword(setTab);

  const onSubmit = (data: unknown) => {
    const newData = { ...data, email };
    mutate(newData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen justify-between w-full bg-[#F8FAFF] ">
      <div className="md:w-1/2 flex items-center justify-center  relative">
        <div className="max-w-lg w-full px-8 mt-10 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center">Reset Password</h2>
            <p className="pt-2 text mb-6">
              Enter your new password and confirm new password.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 relative">
              <img
                className="absolute left-2 top-2 items-center"
                src={icon4}
                alt=""
              />

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "number must be at least 6 characters",
                  },
                })}
                placeholder="New Password"
                className="w-full border-[#a2c6e9] py-3 px-10 rounded-md   text-gray-400 border"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <img
                className="absolute left-2 top-2 items-center"
                src={icon4}
                alt=""
              />

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

              {errors.confirm_password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.confirm_password.message)}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#213C70] text-white p-3 rounded-md"
            >
              {isPending ? "Loading..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
      <div className="md:w-1/2 w-full items-end relative">
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

export default UserResetPasword;

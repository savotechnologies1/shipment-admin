import { useForm } from "react-hook-form";
import profile from "../../assets/profileimg.png";
import { useAppSelector } from "../../store/typedReduxHooks";
import useUpdateAdmin from "./http/useUpdateAdmin";
import useUpdatePassword from "./http/useUpdatePassword";

const AdminUserProfile = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="p-4">
      <div className="bg-white border boder-zinc-300 p-4 sm:p-6 w-full rounded-2xl mx-auto shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            <img
              className="w-[70px] sm:w-[85px] rounded-full"
              src={profile}
              alt="Profile"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {user?.name || "N/A"}
              </h1>
              <p className="text-[#213C70] text-sm">Admin Account</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{user?.name || "N/A"}</p>
          </div>
          <div className="border py-4 px-4 rounded-md w-full bg-[#F9F9F9] font-semibold">
            <p>{user?.email || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white p-4 border border-zinc-300 w-full rounded-2xl mx-auto shadow-md">
        <GeneralInfoForm user={user} />
        <PasswordUpdateForm />
      </div>
    </div>
  );
};

const GeneralInfoForm = ({ user }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
    },
  });

  const { mutate, isPending } = useUpdateAdmin();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="border border-zinc-300 rounded-lg p-2 px-4">
      <span className="text-lg font-bold text-[#213C70]">
        General Information
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 flex-col">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter Email Address"
            readOnly
            className="border py-3 px-4 opacity-50 rounded-md w-full bg-[#F9F9F9] mt-4"
          />
          <input
            {...register("fullName", { required: "Full Name is required" })}
            type="text"
            placeholder="Full Name"
            required
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
        </div>

        <button className="mt-4 w-full sm:w-auto bg-[#3D5EDB] p-2 text-lg text-white rounded-md hover:bg-[#213C70] transition">
          {isPending ? "Loading..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

const PasswordUpdateForm = () => {
  const { register, handleSubmit } = useForm();

  const { mutate, isPending } = useUpdatePassword();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="border border-zinc-300 rounded-lg mt-4 p-2 px-4">
      <span className="text-lg font-bold text-[#213C70]">Change Password</span>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="flex gap-2 flex-col">
          <input
            {...register("oldPassword", {
              required: "Old Password is required",
            })}
            type="password"
            placeholder="Old Password"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
          <input
            {...register("newPassword", {
              required: "New Password is required",
            })}
            type="text"
            placeholder="New Password"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
          <input
            {...register("confirmNewPassword", {
              required: "Confirm Password is required",
            })}
            type="password"
            placeholder="Confirm New Password"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
        </div>
        <button className="mt-4 w-full sm:w-auto bg-[#3D5EDB] p-2 text-lg text-white rounded-md hover:bg-[#213C70] transition">
          {isPending ? "Loading..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default AdminUserProfile;

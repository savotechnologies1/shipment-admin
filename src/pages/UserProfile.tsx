import { useState } from "react";
import { useForm } from "react-hook-form";
import edit from "../assets/edit (2).png";
import profile from "../assets/profileimg.png";
import img from "../assets/userProfile.png";
import { useAppSelector } from "../store/typedReduxHooks";
import useUpdateUser from "./http/useUpdateUser";
import useChangePassword from "./http/useChangePassword";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-4 md:p-7 ">
      <div className="flex items-center gap-2">
        <img src={img} alt="User" className="w-8 h-8 md:w-12 md:h-12" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#213C70]">
          User Profile
        </h1>
      </div>

      {/* Profile Card */}
      <div className="mt-4 bg-white p-6 w-full rounded-2xl mx-auto shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Profile Image + Username */}
          <div className="flex gap-2 items-center">
            <img
              className="w-20 h-20 md:w-[85px]"
              src={profile}
              alt="Profile"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="text-xl md:text-3xl font-bold">RobertFox001</h1>
                <img src={edit} alt="Edit" className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-[#213C70] text-sm">Change profile Image</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center text-sm md:text-lg mt-4 sm:mt-0">
            {[
              { key: "profile", label: "User Profile" },
              { key: "invoicing", label: "Invoicing Details" },
              { key: "cod", label: "Cash on Delivery" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 font-medium rounded-t-md transition-all ${
                  activeTab === tab.key
                    ? "bg-[#213C70] text-white"
                    : "text-gray-700 hover:text-[#213C70]"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4">{activeTab === "profile" && <ProfileForm />}</div>
        <div className="mt-4">
          {activeTab === "invoicing" && <InvoicingForm />}
        </div>
        <div className="mt-4">{activeTab === "cod" && <CODForm />}</div>
      </div>
    </div>
  );
};

const ProfileForm = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <GeneralInfoForm user={user} />
      <PasswordUpdateForm />
    </>
  );
};

const GeneralInfoForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const { mutate, isPending } = useUpdateUser();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="border border-zinc-300 rounded-md p-2 px-4">
      <span className="text-lg font-bold text-[#213C70]">
        General Information
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <InputField
          label="Email Address"
          readOnly={true}
          name="email"
          type="email"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
          required
        />
        <SubmitButton loading={isPending} />
      </form>
    </div>
  );
};

const PasswordUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useChangePassword();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="border border-zinc-300 rounded-md mt-4 p-2 px-4">
      <span className="text-lg font-bold text-[#213C70]">Change Password</span>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="flex gap-2 flex-col">
          <InputField
            label="Old Password"
            name="oldPassword"
            type="password"
            register={register}
            errors={errors}
            required
          />
          <InputField
            label="New Password"
            name="newPassword"
            type="password"
            register={register}
            errors={errors}
            required
          />
          <InputField
            label="Confirm New Password"
            name="confirmNewPassword"
            type="password"
            register={register}
            errors={errors}
            required
          />
        </div>
        <SubmitButton loading={isPending} />
      </form>
    </div>
  );
};

const InvoicingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("Invoicing Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="FirstName1"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Last Name"
          name="LastName"
          register={register}
          errors={errors}
          required
        />
      </div>
      <InputField
        label="Email Address"
        name="email"
        type="email"
        register={register}
        errors={errors}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField
          label="Company"
          name="company1"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Country"
          name="country"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Postal Code"
          name="PostalCode"
          type="number"
          register={register}
          errors={errors}
          required
        />
      </div>
      <InputField
        label="Address"
        name="address"
        register={register}
        errors={errors}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Italian Invoice ID"
          name="invoiceId"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="VAT No."
          name="VATNo"
          type="number"
          register={register}
          errors={errors}
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
};

const CODForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("COD Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <InputField
        label="Beneficiary"
        name="beneficiary"
        register={register}
        errors={errors}
        required
      />
      <InputField
        label="Bank Account"
        name="bankAccount"
        type="number"
        register={register}
        errors={errors}
        required
      />
      <SubmitButton />
    </form>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  register,
  readOnly,
  errors,
  required,
}) => (
  <div className="w-full mt-2">
    <input
      {...register(name, required ? { required: `${label} is required` } : {})}
      type={type}
      readOnly={readOnly}
      placeholder={label}
      className={`${
        readOnly ? "opacity-55" : ""
      } border py-3 outline-none px-4 rounded-md w-full bg-[#F9F9F9]`}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name].message}</p>
    )}
  </div>
);

const SubmitButton = ({ loading }) => (
  <button className="mt-4 w-full sm:w-auto bg-[#3D5EDB] p-2 text-lg text-white rounded-md hover:bg-[#213C70] transition">
    {loading ? "Loading..." : "Save Changes"}
  </button>
);

export default UserProfile;

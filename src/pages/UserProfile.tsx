import React, { useState } from "react";
import { useForm } from "react-hook-form";
import img from "../assets/userProfile.png";
import profile from "../assets/profileimg.png";
import edit from "../assets/edit (2).png";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-2 md:p-7">
      <div className="flex items-center gap-2">
        <img src={img} alt="User" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
          User Profile
        </h1>
      </div>

      <div className="mt-4 bg-white p-6 w-full rounded-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-2 items-center">
            <img className="w-[85px]" src={profile} alt="Profile" />
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">RobertFox001</h1>
                <img src={edit} alt="Edit" />
              </div>
              <p className="text-[#213C70] text-sm">Change profile Image</p>
            </div>
          </div>
          <div className="flex text-lg">
            {[
              { key: "profile", label: "User Profile" },
              { key: "invoicing", label: "Invoicing Details" },
              { key: "cod", label: "Cash on Delivery" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 font-medium rounded-t-md ${
                  activeTab === tab.key
                    ? "bg-[#213C70] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "profile" && <ProfileForm />}
        {activeTab === "invoicing" && <InvoicingForm />}
        {activeTab === "cod" && <CODForm />}
      </div>
    </div>
  );
};

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("Profile Form Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <InputField
          label="First Name"
          name="FirstName"
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
      <div className="flex flex-col sm:flex-row gap-4">
        <InputField
          label="Old Password"
          name="OldPassword"
          type="password"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="New Password"
          name="NewPassword"
          type="password"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Confirm New Password"
          name="ConfirmNewPassword"
          type="password"
          register={register}
          errors={errors}
          required
        />
      </div>
      <SubmitButton />
    </form>
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
      <div className="flex flex-col sm:flex-row gap-4">
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
      <div className="flex flex-col sm:flex-row gap-4">
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
        <InputField
          label="City"
          name="city"
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
      <div className="flex flex-col sm:flex-row  gap-4">
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
  errors,
  required,
}) => (
  <div className="w-full sm:w- mt-2">
    <input
      {...register(name, required ? { required: `${label} is required` } : {})}
      type={type}
      placeholder={label}
      className="border py-4 px-4 rounded-md w-full placeholder:text-black bg-[#F9F9F9] font-semibold"
    />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name].message}</p>
    )}
  </div>
);

const SubmitButton = () => (
  <button className="mt-10 bg-[#3D5EDB] px-8 py-2 text-lg text-white rounded-md">
    Save Changes
  </button>
);

export default UserProfile;

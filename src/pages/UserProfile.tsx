import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import profile from "../assets/profileimg.png";
import { useAppSelector } from "../store/typedReduxHooks";
import useChangePassword from "./http/useChangePassword";
import useUpdateUser from "./http/useUpdateUser";
import usePostInvoiceData from "./http/usePostInvoiceDetail";
import { useGetInvoiceDetail } from "./http/useGetInvoiceDetail";
import { useGetCashOnDetail } from "./http/useGetCashOnDetail";
import usePostCashOnDetail from "./http/usePostCashOnDetail";

const UserProfile = () => {
  const user = useAppSelector((state) => state.user.user);
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-4 m-4 bg-white border border-zinc-300 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-2 items-center">
          <img
            className="w-20 h-20 rounded-full border border-zinc-300"
            src={profile}
            alt="Profile"
          />
          <div>
            <h2 className="text-xl md:text-3xl font-bold">{user?.name}</h2>
            <span className="text-[#213C70] text-sm cursor-pointer">
              Change profile Image
            </span>
          </div>
        </div>

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
      {activeTab === "profile" && <ProfileForm />}
      {activeTab === "invoicing" && <InvoicingForm />}
      {activeTab === "cod" && <CODForm />}
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
    <div className="border border-zinc-300 rounded-lg shadow mt-4 p-2 px-4">
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
    <div className="border border-zinc-300 rounded-lg shadow mt-4 p-2 px-4">
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
  const { data, isLoading } = useGetInvoiceDetail();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = usePostInvoiceData();

  useEffect(() => {
    if (data?.invoice) {
      reset({
        firstName: data.invoice.firstName || "",
        lastName: data.invoice.lastName || "",
        email: data.invoice.email || "",
        company: data.invoice.company || "",
        address: data.invoice.address || "",
        city: data.invoice.city || "",
        state: data.invoice.state || "",
        zip: data.invoice.zip || "",
        country: data.invoice.country || "",
        PostalCode: data.invoice.PostalCode || "",
        invoiceId: data.invoice.invoiceId || "",
        VATNo: data.invoice.VATNo || "",
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    mutate(formData);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
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
          name="company"
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
      <SubmitButton loading={isPending} />
    </form>
  );
};

const CODForm = () => {
  const { data, isLoading } = useGetCashOnDetail();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = usePostCashOnDetail();

  const onSubmit = (formData) => {
    mutate(formData);
  };

  useEffect(() => {
    if (data?.cashOn) {
      reset({
        beneficiary: data.cashOn.beneficiary || "",
        bankAccount: data.cashOn.bankAccount || "",
      });
    }
  }, [data, reset]);

  if (isLoading) return <p>Loading...</p>;

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
      <SubmitButton loading={isPending} />
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
      } border py-3 px-4 rounded-md w-full bg-[#F9F9F9]`}
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

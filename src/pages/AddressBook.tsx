import { useForm } from "react-hook-form";
import useAddAddress from "./http/useAddAddressBook";

const AddressBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useAddAddress();

  const selectedType = watch("addressType", "sender");

  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="mt-4 bg-white p-6 w-full rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="font-bold text-xl md:text-2xl">Add Address</h1>
      </div>

      <div className="flex gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="sender"
            {...register("addressType")}
            defaultChecked
          />
          <span>Sender</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" value="recipient" {...register("addressType")} />
          <span>Recipient</span>
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mt-2">
          <input
            {...register("address", { required: "Address is required" })}
            type="text"
            placeholder="Enter Full Address"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {selectedType === "sender" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  {...register("name", {
                    required: "Sender Name is required",
                  })}
                  type="text"
                  placeholder="Enter Sender's Full Name"
                  className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="number"
                  placeholder="Enter Sender's Phone Number"
                  className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </>
        )}

        {selectedType === "recipient" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  {...register("name", {
                    required: "Recipient Name is required",
                  })}
                  type="text"
                  placeholder="Enter Recipient's Full Name"
                  className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="number"
                  placeholder="Enter Recipient's Phone Number"
                  className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div>
            <input
              {...register("block", { required: "Required" })}
              type="text"
              placeholder="Enter Block/Building"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
            />
            {errors.block && (
              <p className="text-red-500 text-sm">{errors.block.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("floor", { required: "Required" })}
              type="text"
              placeholder="Enter Floor"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
            />
            {errors.floor && (
              <p className="text-red-500 text-sm">{errors.floor.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("unit", { required: "Required" })}
              type="text"
              placeholder="Enter Unit"
              className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
            />
            {errors.unit && (
              <p className="text-red-500 text-sm">{errors.unit.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter Email Address"
            className="border py-3 px-4 rounded-md w-full bg-[#F9F9F9]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-[#213C70] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto"
          >
            {isPending ? "Saving..." : "Save Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressBook;

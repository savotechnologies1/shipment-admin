import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";

async function resendAdminOTP(input: any) {
  return axiosInstance.patch(`${baseUrl}/resend-otp`, input);
}

const useAdminResendOTP = () => {
  return useMutation({
    mutationFn: resendAdminOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useAdminResendOTP;

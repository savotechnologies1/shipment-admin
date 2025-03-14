import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../utils/axios";
import { userUrl } from "../../store/store";

async function resendOTP(input: any) {
  return axiosInstance.patch(`${userUrl}/resend-otp`, input);
}

const useResendOTP = () => {
  return useMutation({
    mutationFn: resendOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useResendOTP;

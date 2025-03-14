import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function sendOTP(input: any) {
  return axiosInstance.patch(`${userUrl}/send-otp`, input);
}

const useSendOTP = (setTab: (tab: number) => void) => {
  return useMutation({
    mutationFn: sendOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(1);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useSendOTP;

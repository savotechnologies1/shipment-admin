import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";

async function sendAdminOTP(input: any) {
  return axiosInstance.patch(`${baseUrl}/send-otp`, input);
}

const useSendAdminOTP = (setTab: (tab: number) => void) => {
  return useMutation({
    mutationFn: sendAdminOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(1);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useSendAdminOTP;

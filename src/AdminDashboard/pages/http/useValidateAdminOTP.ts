import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";

async function validateAdminOTP(input: any) {
  return axiosInstance.patch(`${baseUrl}/validate-otp`, input);
}

const useValidateAdminOTP = (setTab: (tab: number) => void) => {
  return useMutation({
    mutationFn: validateAdminOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(2);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useValidateAdminOTP;

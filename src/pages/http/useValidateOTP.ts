import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function validateOTP(input: any) {
  return axiosInstance.patch(`${userUrl}/validate-otp`, input);
}

const useValidateOTP = (setTab: (tab: number) => void) => {
  return useMutation({
    mutationFn: validateOTP,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(2);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useValidateOTP;

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function changePassword(input: any) {
  return axiosInstance.patch(`${userUrl}/change-password`, input);
}

const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useChangePassword;

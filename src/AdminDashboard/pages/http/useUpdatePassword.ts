import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";

async function updatePassword(input: any) {
  return axiosInstance.patch(`${baseUrl}/update-admin-password`, input);
}

const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useUpdatePassword;

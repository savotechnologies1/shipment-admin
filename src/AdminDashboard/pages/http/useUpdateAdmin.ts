import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";

async function updateAdmin(input: any) {
  return axiosInstance.patch(`${baseUrl}/update-admin`, input);
}

const useUpdateAdmin = () => {
  return useMutation({
    mutationFn: updateAdmin,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useUpdateAdmin;

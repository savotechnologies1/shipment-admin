import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function addAddress(input: any) {
  return axiosInstance.post(`${userUrl}/add-address`, input);
}

const useAddAddress = () => {
  return useMutation({
    mutationFn: addAddress,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useAddAddress;

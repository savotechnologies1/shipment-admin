import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function postCashOn(input: any) {
  return axiosInstance.post(`${userUrl}/cash-on`, input);
}

const usePostCashOnDetail = () => {
  return useMutation({
    mutationFn: postCashOn,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default usePostCashOnDetail;

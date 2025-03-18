import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function postInvoice(input: any) {
  return axiosInstance.post(`${userUrl}/invoice`, input);
}

const usePostInvoiceData = () => {
  return useMutation({
    mutationFn: postInvoice,

    onSuccess: async (res) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default usePostInvoiceData;

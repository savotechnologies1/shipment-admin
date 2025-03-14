import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function update(input: any) {
  return axiosInstance.patch(`${userUrl}/update-user`, input);
}

const useUpdateUser = () => {
  return useMutation({
    mutationFn: update,

    onSuccess: async (res, input) => {
      toast.success(res.data.message);
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useUpdateUser;

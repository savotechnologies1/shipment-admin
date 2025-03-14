import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { userUrl } from "../../store/store";
import axiosInstance from "../../utils/axios";

async function ResetPassword(input: any) {
  return axiosInstance.patch(`${userUrl}/reset-password`, input);
}

const useResetPassword = (setTab: (tab: number) => void) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ResetPassword,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(2);
      navigate("/sign-in");
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useResetPassword;

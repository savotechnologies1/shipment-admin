import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { baseUrl } from "../../../store/store";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

async function adminResetPassword(input: any) {
  return axiosInstance.patch(`${baseUrl}/reset-password`, input);
}

const useAdminResetPassword = (setTab: (tab: number) => void) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: adminResetPassword,

    onSuccess: async (res) => {
      toast.success(res.data.message);
      setTab(2);
      navigate("/admin/sign-in");
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useAdminResetPassword;

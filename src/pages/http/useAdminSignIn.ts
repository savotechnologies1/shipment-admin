import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { baseUrl } from "../../store/store";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized } from "../../store/userSlice";
import { setToken } from "../../utils/tokenHelper";
import { toast } from "sonner";

async function login(input: any) {
  return axiosInstance.post(`${baseUrl}/admin-login`, input);
}

const useAdminSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: login,

    onSuccess: async (res, input) => {
      setToken(res.data.token, input.rememberMe);
      localStorage.setItem("role", "admin_v1");
      dispatch(setIsAuthorized(true));

      toast.success(res.data.message);
      navigate("/");
      window.location.reload();
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useAdminSignIn;

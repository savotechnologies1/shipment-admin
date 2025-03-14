import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { userUrl } from "../../store/store";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized } from "../../store/userSlice";
import axiosInstance from "../../utils/axios";
import { setToken } from "../../utils/tokenHelper";

async function login(input: any) {
  return axiosInstance.post(`${userUrl}/user-signin`, input);
}

const useUserSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: login,

    onSuccess: async (res, input) => {
      setToken(res.data.token, input.rememberMe);
      localStorage.setItem("role", "user_v1");
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

export default useUserSignIn;

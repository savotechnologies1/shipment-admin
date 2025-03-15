import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized } from "../../store/userSlice";
import axiosInstance from "../../utils/axios";
import { baseUrl, userUrl } from "../../store/store";

async function userLogOut() {
  const role = localStorage.getItem("role");
  let roleUrl = "";

  if (role === "admin_v1") {
    roleUrl = `${baseUrl}/admin-logout`;
  } else {
    roleUrl = `${userUrl}/user-logout`;
  }
  return axiosInstance.patch(roleUrl);
}

const useUserLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: userLogOut,

    onSuccess: async (res) => {
      localStorage.removeItem("role");
      localStorage.removeItem("auth_token");
      dispatch(setIsAuthorized(false));

      toast.success(res.data.message);
      navigate("/sign-in");
    },
    onError: (res) => {
      toast.error(res.response.data.message);
    },
  });
};

export default useUserLogout;

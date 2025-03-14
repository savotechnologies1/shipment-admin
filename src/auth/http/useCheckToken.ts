import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { baseUrl, userUrl } from "../../store/store";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized, updateUser } from "../../store/userSlice";

async function getAdmin() {
  const role = localStorage.getItem("role");

  if (role && role == "admin_v1") {
    const { data } = await axiosInstance.get(`${baseUrl}/check-token`);
    return data.user;
  } else {
    const { data } = await axiosInstance.get(`${userUrl}/check-token`);
    return data.user;
  }
}

export const useCheckToken = () => {
  const dispatch = useAppDispatch();
  const role = localStorage.getItem("role");

  const fetchUser = async () => {
    try {
      const res = await getAdmin();
      dispatch(updateUser(res));
      dispatch(setIsAuthorized(true));

      return res;
    } catch (error) {
      dispatch(setIsAuthorized(false));
      return error;
    }
  };

  return useQuery({
    queryKey: [
      role === "admin_v1"
        ? `${baseUrl}/check-token/admin`
        : `${userUrl}/check-token/user`,
    ],
    queryFn: fetchUser,
  });
};

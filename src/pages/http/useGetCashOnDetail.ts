import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { userUrl } from "../../store/store";

async function fetchData() {
  const { data } = await axiosInstance.get(`${userUrl}/get-cash-on`);
  return data.data;
}

export const useGetCashOnDetail = () => {
  return useQuery({
    queryKey: [`${userUrl}/get-cash-on`],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
};

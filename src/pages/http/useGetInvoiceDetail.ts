import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { userUrl } from "../../store/store";

async function fetchData() {
  const { data } = await axiosInstance.get(`${userUrl}/get-invoice`);
  return data.data;
}

export const useGetInvoiceDetail = () => {
  return useQuery({
    queryKey: [`${userUrl}/get-invoice`],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
};

import useSWR from "swr";
import axios from "axios";

export default function useRequest(request, { initialData, ...config } = {}) {
  const { data, error } = useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then((response) => response.data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: "InitialData",
        headers: {},
        data: initialData,
      },
    }
  );
  return {
    data,
    error,
    loading: !error && !data,
  };
}

import type { TDownloadResponse } from "@/types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (signal: AbortSignal): Promise<TDownloadResponse> => {
  const result = await axios.get<TDownloadResponse>(
    `http://localhost:3001/api/v1/download`,
    { signal }
  );

  return result.data;
};

const useGetDownloads = (): UseQueryResult<TDownloadResponse> => {
  return useQuery({
    queryKey: ["downloads"],
    queryFn: ({ signal }) => fetchData(signal),
  });
};

export default useGetDownloads;

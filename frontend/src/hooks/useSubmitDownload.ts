import axios, { AxiosError } from "axios";
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import type { TDownloadResponse } from "@/types";

const submitDownload = async (url: string): Promise<TDownloadResponse> => {
  const { data } = await axios.post("http://localhost:3001/api/v1/download", {
    url,
  });
  return data;
};

export const useSubmitDownload = (): UseMutationResult<
  TDownloadResponse,
  AxiosError,
  string
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitDownload,
    onMutate: (data) => {
      const savedUrls = queryClient.getQueryData<TDownloadResponse>([
        "downloads",
      ]);
      queryClient.setQueryData<TDownloadResponse>(["downloads"], (old) => {
        const prev = old?.data ?? [];
        return {
          data: [
            ...prev,
            {
              url: data,
              status: "pending",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        };
      });
      return () => queryClient.setQueryData(["downloads"], savedUrls);
    },
    onError: (_, __, rollback) => {
      if (rollback) rollback();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["downloads"], exact: false });
    },
  });
};

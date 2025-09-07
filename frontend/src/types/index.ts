export type TDownload = {
  id: string;
  url: string;
  status: "pending" | "processing" | "success" | "failed";
  createdAt: Date;
  updatedAt: Date;
};

export type TDownloadResponse = {
  success?: boolean;
  message?: string;
  data?: TDownload[];
};

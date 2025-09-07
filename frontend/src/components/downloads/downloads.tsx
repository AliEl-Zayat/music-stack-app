import useGetDownloads from "@/hooks/useGetComments";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function DownloadsTable() {
  const getDownloads = useGetDownloads();

  if (getDownloads.isLoading) {
    return <div>Loading...</div>;
  }

  if (getDownloads.isError) {
    return <div>Error: {getDownloads.error.message}</div>;
  }

  return (
    <div className="flex-2">
      <DataTable columns={columns} data={getDownloads.data?.data ?? []} />
    </div>
  );
}

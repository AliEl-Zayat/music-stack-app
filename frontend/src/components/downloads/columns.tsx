import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { TDownload } from "@/types";
import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<TDownload>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return `${row.original?.id?.slice(0, 8)}...`;
    },
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge variant={row.original?.status}>{row.original?.status}</Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return formatDate(row.original?.createdAt);
    },
  },
];

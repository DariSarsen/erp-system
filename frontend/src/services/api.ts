import type { TableData } from "../types/table";

export async function fetchTableData(source: "inventory" | "sales"): Promise<TableData> {
  const res = await fetch(`/api/${source}/table/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

import React from "react";

export type TableData = {
  columns: string[];
  data: (string | number | null)[][];
};

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

type DataTableProps = TableData;

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg w-1/2 m-auto">
      <table className="table-auto min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-emerald-700/90 text-white">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="text-md px-4 py-3 border-b border-gray-300 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-emerald-100/50">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-emerald-100 transition-all duration-400">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-b border-gray-300">
                  {typeof cell === "string" && cell.includes("T")
                    ? formatDate(cell)
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

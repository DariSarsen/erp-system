import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { Boxes, ShoppingCart, Loader2 } from "lucide-react";
import { fetchTableData } from "../services/api";
import type { TableData } from "../types/table";

const TablePage = () => {
  const [source, setSource] = useState<"inventory" | "sales">("inventory");
  const [tableData, setTableData] = useState<TableData>({ columns: [], data: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTableData(source)
      .then(setTableData)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [source]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-12 px-4">
       <div className="self-end w-full max-w-6xl mb-4 text-right">
        <a
          href="http://localhost:8000/admin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 hover:text-emerald-900 underline text-sm"
        >
          Перейти в админку
        </a>

      </div>
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        ERP Таблица:
        <span className="ml-2 inline-flex items-center text-emerald-800">
          {source === "inventory" ? <Boxes className="w-6 h-6 mr-2" /> : <ShoppingCart className="w-6 h-6 mr-2" />}
          {source === "inventory" ? "Инвентарь" : "Продажи"}
        </span>
      </h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSource("inventory")}
          className={`px-6 py-2 rounded-lg text-md font-medium transition-all duration-300
            ${source === "inventory" ? "bg-emerald-700 text-white" : "bg-white border border-gray-300 text-gray-700"}
            hover:bg-emerald-800 hover:text-white`}
        >
          Инвентарь
        </button>
        <button
          onClick={() => setSource("sales")}
          className={`px-6 py-2 rounded-lg text-md font-medium transition-all duration-300
            ${source === "sales" ? "bg-emerald-700 text-white" : "bg-white border border-gray-300 text-gray-700"}
            hover:bg-emerald-800 hover:text-white`}
        >
          Продажи
        </button>
      </div>

      {loading ? (
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
      ) : tableData.columns.length > 0 ? (
        <div className="w-full max-w-6xl">
          <DataTable columns={tableData.columns} data={tableData.data} />
        </div>
      ) : (
        <p className="text-gray-500 mt-8">Нет данных в базе...</p>
      )}
    </div>
  );
};

export default TablePage;

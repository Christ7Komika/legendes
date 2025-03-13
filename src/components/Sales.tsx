import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_HOST } from "../lib/constant";

export default function Sales() {
  const [totalTitle, setTotalTitle] = useState<[string, number][]>([]);
  const [total, setTotal] = useState(0);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`${SERVER_HOST}/sales`)
      .then((response) => {
        const { totalSalesPerTitle, totalSales } = response.data;
        setTotal(totalSales);
        setTotalTitle(Object.entries(totalSalesPerTitle) as [string, number][]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des ventes :", error);
      })
      .finally(() => setIsPending(false));
  }, []);

  if (isPending) return null;
  return (
    <div className="top-1/2 left-0 z-50 fixed bg-white/80 backdrop-blur-2xl p-4 rounded-tr-lg rounded-br-lg w-[170px] -translate-y-1/2">
      <h2 className="flex justify-between mb-2 pb-1 border-neutral-200 border-b text-neutral-800 text-sm">
        Total ventes <span>{total}</span>
      </h2>
      <ul className="space-y-1">
        {totalTitle.map((d) => (
          <li
            key={d[0]}
            className="flex justify-between items-center text-neutral-800 text-sm"
          >
            <span>{d[0]}</span>
            <span>{d[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

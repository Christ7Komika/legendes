import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_HOST } from "../lib/constant";
import { UpIcon } from "./icons/Icons";

export default function Sales() {
  const [totalTitle, setTotalTitle] = useState<[string, number][]>([]);
  const [total, setTotal] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`${SERVER_HOST}/sales`)
      .then((response) => {
        const { totalSalesPerTitle, totalSales } = response.data;
        setTotal(totalSales);
        setTotalTitle(Object.entries(totalSalesPerTitle) as [string, number][]);
        const digit = Math.abs(total).toString().length;
        setWidth(
          digit === 1
            ? -155
            : digit === 2
            ? -150
            : digit === 3
            ? -140
            : digit === 4
            ? -130
            : -128
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des ventes :", error);
      })
      .finally(() => setIsPending(false));
  }, []);

  if (isPending) return null;

  // if (total === 0 && totalTitle.length === 0) return null;
  return (
    <div
      className="top-1/2 z-30 fixed flex items-center gap-x-1 -translate-y-1/2"
      style={{
        left: show ? 0 : width,
      }}
    >
      <div className="bg-black/80 backdrop-blur-2xl rounded-tr-lg rounded-br-lg w-[200px] transition-all duration-300 ease-in-out">
        <h2 className="flex justify-between mb-2 p-2.5 border-neutral-500 border-b text-neutral-300 text-sm">
          Total ventes{" "}
          <span className="flex items-center bg-neutral-100/10 px-2 rounded-full h-6">
            {total}
          </span>
        </h2>
        <ul className="space-y-1 p-2.5 pt-1">
          {totalTitle.map((d) => (
            <li
              key={d[0]}
              className="flex justify-between items-center text-neutral-300 text-sm"
            >
              <span>
                {d[0].toLowerCase() ===
                "Les vieux la nous bloquent".toLowerCase()
                  ? "L.V.N.B"
                  : d[0]}
              </span>
              <span className="flex items-center bg-neutral-100/10 px-2 rounded-full h-6">
                {d[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-center items-center bg-black/80 backdrop-blur-2xl rounded-full w-8 h-8 cursor-pointer"
      >
        <span className="flex justify-center items-center w-3 h-3 rotate-90">
          <UpIcon className="fill-neutral-200" />
        </span>
      </div>
    </div>
  );
}

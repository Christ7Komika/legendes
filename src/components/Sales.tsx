import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_HOST } from "../lib/constant";
import { LoaderIcon, UpIcon } from "./icons/Icons";
import clsx from "clsx";

export default function Sales() {
  const [totalTitle, setTotalTitle] = useState<[string, number][]>([]);
  const [total, setTotal] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [show, setShow] = useState(true);

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

  return (
    <div
      className="top-1/2 z-30 fixed flex items-center gap-x-1 transition-all -translate-y-1/2 duration-300 ease-in-out"
      style={{
        left: show ? 0 : -200,
      }}
    >
      <div className="bg-black/80 backdrop-blur-2xl rounded-tr-lg rounded-br-lg w-[200px]">
        {isPending ? (
          <div className="p-4 w-full">
            <span className="flex justify-center items-center w-5 h-5 animate-spin ease-in-out">
              <LoaderIcon className="fill-white" />
            </span>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-center items-center bg-black/80 backdrop-blur-2xl rounded-full w-8 h-8 cursor-pointer"
      >
        <span
          className={clsx(
            "flex justify-center items-center w-3 h-3",
            show ? "-rotate-90" : "rotate-90"
          )}
        >
          <UpIcon className="fill-neutral-200" />
        </span>
      </div>
    </div>
  );
}

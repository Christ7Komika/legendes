import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SERVER_HOST } from "../../lib/constant";
import axios from "axios";
import { albums } from "../../datas/albums";
import useArticle from "../../stores/article";
import { LoaderIcon } from "../icons/Icons";
import useAlbums from "../../stores/albums";

export default function PaymentButton() {
  const [show, setShow] = useState(false);
  const setAll = useAlbums.use.setAll();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPending, setIsPending] = useState(false);
  const setId = useArticle.use.setId();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]);

  async function handleStripe(e: React.SyntheticEvent) {
    setIsPending(true);
    e.preventDefault();
    e.stopPropagation();

    const response = await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${SERVER_HOST}/create-checkout-session`,
      data: { playlist: albums },
      timeout: 30000,
    });

    if (response.status !== 200) {
      setIsPending(false);
    }

    const { id, url } = response.data;
    if (id && url) {
      setId(id);
      window.location.assign(url);
    }
    setIsPending(false);
  }

  async function handleMobileMoney(e: React.SyntheticEvent) {
    e.preventDefault();
    setAll(true);
    window.location.href = "/payement-mobile-money";
  }

  return (
    <div className="relative">
      {/* Bouton d'achat */}
      <button
        className="flex justify-center items-center bg-neutral-200 mx-auto rounded-md w-[150px] h-11 text-[#131112] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Acheter
      </button>

      {/* Dropdown */}
      {show && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="left-1/2 absolute bg-white shadow-lg mt-2 p-2 border border-gray-200 rounded-md w-[180px] -translate-x-1/2 transform"
        >
          <ul className="space-y-2 text-gray-800 text-sm">
            <li
              className="flex justify-center items-center hover:bg-gray-100 p-2 rounded cursor-pointer"
              onClick={handleStripe}
            >
              {isPending ? (
                <span className="flex justify-center items-center w-5 h-5 animate-spin duration-500 ease-in-out">
                  <LoaderIcon className="fill-[#131112]" />
                </span>
              ) : (
                "💳 Carte bancaire"
              )}
            </li>

            <li
              className="flex justify-center hover:bg-gray-100 p-2 rounded cursor-pointer"
              onClick={handleMobileMoney}
            >
              📱 Mobile Money
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

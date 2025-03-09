import useScroll from "../hooks/useScroll";
import { UpIcon } from "./icons/Icons";
import clsx from "clsx";

export default function UpTo() {
  const scroll = useScroll();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "right-3 z-20 fixed flex justify-center items-center bg-zinc-100 w-12 h-14 transition-all duration-500 cursor-pointer",
        scroll < 3500 ? "bottom-24 opacity-0" : "bottom-28 opacity-100"
      )}
    >
      <span className="w-6 h-6">
        <UpIcon />
      </span>
    </button>
  );
}

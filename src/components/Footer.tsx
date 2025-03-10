import clsx from "clsx";
import { useLocation } from "react-router";

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer
      className={clsx(
        "bg-black px-2 sm:px-8 text-sm",
        pathname === "/" && "pt-2"
      )}
    >
      <div
        className={clsx(
          "flex sm:flex-row flex-col justify-start sm:justify-between gap-x-2 mx-auto max-w-[1350px] text-white",
          pathname === "/" && "h-[150px] items-center sm:items-start pt-2",
          pathname !== "/" && "h-fit items-center py-2"
        )}
      >
        <p className="text-center">
          Copyright © 2025 BOYOKA All rights reserved
        </p>
        <p>Licensed to BOYOKA</p>
      </div>
    </footer>
  );
}

import clsx from "clsx";
import { MTNIcon, VisaCardIcon } from "../icons/Icons";
import { AirtelIcon } from "../icons/Icons";
import React from "react";

type ButtonProps = {
  type?: "stripe" | "mtn" | "airtel";
  onClick?: (e: React.SyntheticEvent) => void;
};

export default function Button({ onClick, type = "stripe" }: ButtonProps) {
  function handleClick(e: React.SyntheticEvent) {
    if (onClick) {
      onClick(e);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex justify-center items-center px-4 rounded-lg w-full h-12 cursor-pointer",
        type === "stripe" && "bg-[#363b38]",
        type === "mtn" && "bg-[#FFCC00]",
        type === "airtel" && "bg-[#e90000]"
      )}
    >
      {type === "stripe" && (
        <span className="w-16">
          <VisaCardIcon />
        </span>
      )}
      {type === "mtn" && (
        <span className="w-24">
          <MTNIcon />
        </span>
      )}
      {type === "airtel" && (
        <span className="w-16">
          <AirtelIcon />
        </span>
      )}
    </button>
  );
}

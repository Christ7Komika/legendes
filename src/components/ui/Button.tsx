import clsx from "clsx";
import { MTNIcon, VisaCardIcon } from "../icons/Icons";
import { AirtelIcon } from "../icons/Icons";

type ButtonProps = {
  type?: "stripe" | "mtn" | "airtel";
};

export default function Button({ type = "stripe" }: ButtonProps) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center px-4 rounded-lg w-full h-12",
        type === "stripe" && "bg-[#0E4595]",
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
    </div>
  );
}

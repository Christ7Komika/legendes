import clsx from "clsx";
import { XIcon } from "../icons/Icons";

type ErrorCardProps = {
  type: "error" | "success";
  setMessage: React.Dispatch<
    React.SetStateAction<{
      success: boolean;
      error: boolean;
    }>
  >;
};
export default function ErrorCard({ type, setMessage }: ErrorCardProps) {
  return (
    <div
      className={clsx(
        "relative mt-4 p-3 border-2 rounded-md w-full text-center",
        type === "error" && "bg-red-600/10 text-red-600  border-red-200 ",
        type === "success" &&
          "bg-emerald-600/10 text-emerald-600  border-emerald-500 "
      )}
    >
      <span
        className="top-1 right-1 absolute flex justify-center items-center w-3.5 h-3.5 cursor-pointer"
        onClick={() => setMessage({ error: false, success: false })}
      >
        <XIcon
          className={clsx(
            type === "error" && "fill-red-600",
            type === "success" && "fill-emerald-600"
          )}
        />
      </span>
      {type === "error" && " Une erreur produite lors de l'envoi du mail"}
      {type === "success" && "Votre mail a bien été envoyé"}
    </div>
  );
}

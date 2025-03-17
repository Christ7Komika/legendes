import clsx from "clsx";

type LabelProps = {
  title: string;
  id: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
};

export default function Label({
  title,
  id,
  children,
  error = "Champs invalide",
  className,
}: LabelProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={id}
        className={clsx(error ? "text-red-600" : "text-neutral-600", className)}
      >
        {title} <span className="text-red-600">*</span>
      </label>
      {children}
      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}

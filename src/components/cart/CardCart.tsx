import clsx from "clsx";
import { formatPrice, getPrice } from "../../lib/utils";
import { AlbumCartType } from "../../types/album";

type CardCartProps = {
  album: AlbumCartType;
  removeAlbum: (id: number) => void;
  shadow?: "md" | "lg" | "xl";
};

export default function CardCart({
  album,
  removeAlbum,
  shadow = "xl",
}: CardCartProps) {
  function deleteAlbum(id: number) {
    removeAlbum(id);
  }

  return (
    <div
      className={clsx(
        "relative flex gap-x-2 bg-white shadow-md shadow-zinc-300/30 p-2 rounded-lg min-w-[300px]",
        shadow === "md" && "shadow-md",
        shadow === "lg" && "shadow-lg",
        shadow === "xl" && "shadow-xl"
      )}
    >
      <span
        onClick={() => deleteAlbum(album.id)}
        className="top-1 right-1 absolute flex justify-center items-center bg-red-600/10 rounded-full w-4 h-4 text-red-600 cursor-pointer"
      >
        -
      </span>
      <div className="rounded-lg w-[50px] h-[50px] overflow-hidden">
        <img
          src={album.cover}
          alt="Cover"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="-space-y-0.5">
        <h2>{album.title}</h2>
        <p className="text-neutral-500 text-sm">
          <span>1</span> x <span>{getPrice(album.price)} FCFA</span> ={" "}
          <span>{formatPrice(getPrice(album.price) * 1)} FCFA</span>
        </p>
      </div>
    </div>
  );
}

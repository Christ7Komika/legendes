import useAlbums from "../../stores/albums";
import { ShoppingCartIcon } from "../icons/Icons";

export default function CartButton() {
  const albums = useAlbums.use.albums();

  return (
    <>
      {albums.length > 0 && (
        <a
          href="/panier"
          className="right-8 bottom-[60px] z-40 fixed flex justify-center items-center bg-white shadow-neutral-300/30 shadow-xl rounded-full w-[60px] h-[60px]"
        >
          <span className="relative flex justify-center items-center w-7 h-7">
            <span className="-top-1.5 -right-2 absolute flex justify-center items-center bg-black border-2 border-white rounded-full w-5 h-5 text-[8px] text-white">
              {albums.length}
            </span>
            <ShoppingCartIcon className="fill-black" />
          </span>
        </a>
      )}
    </>
  );
}

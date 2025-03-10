import { useState } from "react";
import { usePageHeight } from "../../hooks/usePageHeight";
import useScroll from "../../hooks/useScroll";
import { useWidth } from "../../hooks/useWidth";
import useAlbums from "../../stores/albums";
import { EmptyIcon } from "../icons/Icons";
import CartInfo from "./CartInfo";
import PricingCard from "./PricingCard";
import PricingCardMobile from "./PricingCardMobile";

export default function CartList() {
  const [height, setHeight] = useState<boolean>(false);
  const albums = useAlbums.use.albums();
  const removeAlbum = useAlbums.use.removeAlbum();
  const editQuantity = useAlbums.use.editQuantity();
  const scroll = useScroll();
  const width = useWidth();
  const pageHeight = usePageHeight();
  return (
    <div className="px-2 md:px-4 lg:px-8 py-24 min-h-dvh">
      {albums.length === 0 && (
        <div className="space-y-3 bg-white mx-auto p-12 rounded-xl w-full max-w-[850px]">
          <span className="block mx-auto w-20 h-20">
            <EmptyIcon className="fill-neutral-500" />
          </span>
          <div className="space-y-1">
            <h2 className="font-semibold text-neutral-600 text-xl text-center">
              Votre panier est vide
            </h2>
            <p className="text-neutral-500 text-sm text-center">
              Ajoutez des articles à votre panier avant de finaliser votre
              commande. Parcourez notre boutique et trouvez ce qui vous plaît !
            </p>
          </div>
          <a
            href="/buy"
            className="block bg-black mx-auto px-4 py-1 rounded-lg w-fit text-white text-sm text-center"
          >
            Continuer vos achats
          </a>
        </div>
      )}
      {albums.length > 0 && (
        <div className="gap-x-2 md:gap-x-4 lg:gap-x-8 grid grid-cols-1 md:grid-cols-[1.5fr_1.2fr] mx-auto w-full max-w-[850px]">
          <div
            className="space-y-8 md:pb-0 transition-all duration-300"
            style={{
              paddingBottom:
                width >= 460 && height
                  ? 210
                  : width >= 460 && !height
                  ? 90
                  : width < 460 && height
                  ? 320
                  : 200,
            }}
          >
            {[...albums]
              .sort((a, b) => a.id - b.id)
              .map((album) => (
                <CartInfo
                  key={album.id}
                  album={album}
                  editQuantity={editQuantity}
                />
              ))}
          </div>
          <div className="hidden md:block relative">
            <PricingCard
              albums={[...albums].sort((a, b) => a.id - b.id)}
              removeAlbum={removeAlbum}
            />
          </div>
        </div>
      )}
      <div
        className="md:hidden block bottom-12 left-0 fixed bg-white/70 backdrop-blur-xl rounded-t-xl w-full overflow-y-hidden transition-all duration-200 ease-in-out"
        style={{
          bottom:
            width >= 640 && pageHeight - scroll <= 36
              ? 36
              : width < 640 && pageHeight - scroll <= 56
              ? 56
              : 0,
        }}
      >
        <PricingCardMobile
          albums={albums}
          removeAlbum={removeAlbum}
          setHeight={setHeight}
        />
      </div>
    </div>
  );
}

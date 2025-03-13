import useAlbums from "../../stores/albums";
import { EmptyIcon } from "../icons/Icons";
import CartInfo from "./CartInfo";
import PricingCard from "./PricingCard";

export default function CartList() {
  const albums = useAlbums.use.albums();
  const removeAlbum = useAlbums.use.removeAlbum();

  return (
    <div className="px-2 md:px-4 lg:px-8 sm:py-24 pb-8 min-h-dvh">
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
          <div className="space-y-8 md:pb-0 transition-all duration-300">
            {[...albums]
              .sort((a, b) => a.id - b.id)
              .map((album) => (
                <CartInfo key={album.id} album={album} />
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
    </div>
  );
}

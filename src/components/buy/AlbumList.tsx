import { albums } from "../../datas/albums";
import useAudio from "../../hooks/useAudio";
import AlbumCart from "../card/AlbumCart";
import PaymentButton from "../ui/PaymentButton";

export default function AlbumList() {
  const { isPlaying, isReady, playTrack, waveRef, currentTrack } = useAudio({
    enableAutoPlayNext: false,
  });
  return (
    <div className="px-2">
      <div className="mx-auto pt-24 pb-12 max-w-[1150px]">
        <div className="flex justify-between items-center bg-white/60 shadow-md shadow-neutral-300/20 backdrop-blur-xl mb-12 p-4 border border-white/30 rounded-lg w-full transform-gpu">
          <h2 className="w-full font-semibold text-neutral-600 text-lg uppercase">
            Acheter l'album complet à 5000 FCFA
          </h2>
          <PaymentButton />
        </div>
        <h2 className="text-neutral-600 text-xl text-center">
          Achetez votre ou vos chansons en un clic et vibrez au son de votre
          sélection !
        </h2>
      </div>
      <div className="gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto pb-24 max-w-[1150px] h-fit">
        {albums.map((album) => (
          <AlbumCart
            key={album.id}
            data={album}
            playTrack={playTrack}
            isPlaying={isPlaying}
            isReady={isReady}
            waveRef={waveRef}
            currentTrack={currentTrack}
          />
        ))}
      </div>
    </div>
  );
}

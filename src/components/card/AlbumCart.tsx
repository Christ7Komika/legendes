import useAlbums from "../../stores/albums";
import { AlbumCartType } from "../../types/album";
import { LoaderIcon, PauseIcon, PlayIcon } from "../icons/Icons";

type AlbumCartProps = {
  data: AlbumCartType;
  playTrack: (index: number) => void;
  isPlaying: boolean;
  isReady: boolean;
  waveRef: React.RefObject<HTMLDivElement | null>;
  currentTrack: AlbumCartType;
};

export default function AlbumCart({
  data,
  playTrack,
  isPlaying,
  isReady,
  waveRef,
  currentTrack,
}: AlbumCartProps) {
  const addAlbum = useAlbums.use.addAlbum();
  const album = useAlbums.use.albums();
  const { id, cover, title, price, song, artist } = data;

  function handleAlbum(e: React.SyntheticEvent) {
    const album = { id, cover, title, price, song };
    addAlbum(album);
  }

  return (
    <div className="space-y-2 w-full h-fit">
      <div className="group relative w-full max-w-full md:max-w-[550px] h-full max-h-fit md:max-h-[550px]">
        <button
          onClick={() => playTrack(id - 1)}
          className="right-2 bottom-2 group-hover:bottom-2 absolute flex justify-center items-center bg-white backdrop-blur-2xl rounded-full w-10 h-10 cursor-pointer"
        >
          <span className="w-6 h-6">
            {!isReady && currentTrack.id === id && (
              <span className="flex animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-black" />
              </span>
            )}
            {!isReady && currentTrack.id !== id && (
              <PlayIcon className="fill-black" />
            )}
            {isReady && currentTrack.id === id && isPlaying && (
              <PauseIcon className="fill-black" />
            )}
            {isReady && currentTrack.id === id && !isPlaying && (
              <PlayIcon className="fill-black" />
            )}
            {isReady && currentTrack.id !== id && (
              <PlayIcon className="fill-black" />
            )}
          </span>
          <div className="hidden w-full" ref={waveRef} />
        </button>

        <img
          src={cover}
          alt={title}
          className="rounded-xl w-full h-full object-center object-cover overflow-hidden"
        />
      </div>
      <div className="space-y-1">
        <div className="-space-y-1 min-h-[50px]">
          <h2 className="font-semibold text-lg text-center">{title}</h2>
          <p className="text-neutral-500 text-sm text-center">{artist}</p>
        </div>

        <p className="font-medium text-neutral-400 text-2xl text-center">
          {price}
        </p>
      </div>
      <button
        onClick={handleAlbum}
        className="flex mx-auto px-8 py-2 border border-neutral-300 rounded-md text-zinc-500 text-center cursor-pointer"
      >
        {album.filter((e) => e.id === id).length === 1
          ? "Article ajouté"
          : "Ajouter"}
      </button>
    </div>
  );
}

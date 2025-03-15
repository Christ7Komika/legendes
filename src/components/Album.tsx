import {
  EndIcon,
  LoaderIcon,
  PauseIcon,
  PlayIcon,
  StartIcon,
} from "./icons/Icons";

type AlbumProps = {
  handlePlayPause: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  isPlaying: boolean;
  isReady: boolean;
};

export default function Album({
  handleNext,
  handlePlayPause,
  handlePrev,
  isPlaying,
  isReady,
}: AlbumProps) {
  return (
    <div className="bg-zinc-100 px-2 py-[80px]">
      <div className="space-y-4 mb-4">
        <h2 className="mx-auto font-bold text-3xl text-center tracking-widest">
          ALBUM
        </h2>
        <span className="block bg-black mx-auto mt-4 w-[60px] h-[1px]" />
      </div>
      <div className="space-y-1">
        <p className="text-lg text-center">L’ALBUM LEGENDES</p>
        <p className="text-center">
          sera bientôt disponible dans son intégralité
        </p>
        <p className="text-center">
          Restez à l’écoute pour sa sortie imminente
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-x-3 pt-6">
          <button
            onClick={handlePrev}
            className="flex justify-center items-center p-0 w-7 h-7 cursor-pointer"
          >
            <StartIcon className="fill-neutral-800" />
          </button>
          <button
            onClick={handlePlayPause}
            className="flex justify-center items-center p-0 w-16 h-16 cursor-pointer"
          >
            {!isReady && (
              <span className="flex justify-center items-center w-8 h-8 animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-neutral-800" />
              </span>
            )}
            {isReady && isPlaying && <PauseIcon className="fill-neutral-800" />}
            {isReady && !isPlaying && <PlayIcon className="fill-neutral-800" />}
          </button>
          <button
            onClick={handleNext}
            className="flex justify-center items-center w-7 h-7 cursor-pointer"
          >
            <EndIcon className="fill-neutral-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

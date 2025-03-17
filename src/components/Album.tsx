import { AlbumCartType } from "../types/album";
import TrackList from "./card/TrackList";
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
  currentTrack: AlbumCartType;
  playTrack: (index: number) => void;
};

export default function Album({
  handleNext,
  handlePlayPause,
  handlePrev,
  isPlaying,
  isReady,
  currentTrack,
  playTrack,
}: AlbumProps) {
  return (
    <div className="bg-zinc-100 px-2 py-[80px]" id="album-section">
      <div className="space-y-4 mb-4">
        <h2 className="mx-auto font-bold text-3xl text-center tracking-widest">
          ALBUM
        </h2>
        <span className="block bg-black mx-auto mt-4 w-[60px] h-[1px]" />
      </div>
      <div className="space-y-1">
        <p className="text-lg text-center uppercase">Découvrez la track list</p>
        <p className="text-center">La playlist est enfin disponible !</p>
      </div>

      <div className="py-6">
        <TrackList
          playTrack={playTrack}
          isPlaying={isPlaying}
          isReady={isReady}
          currentTrack={currentTrack}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-x-3 bg-neutral-50 rounded-full w-[200px] h-14">
          <button
            onClick={handlePrev}
            className="flex justify-center items-center w-5 h-5 cursor-pointer"
          >
            <StartIcon className="fill-neutral-600" />
          </button>
          <button
            onClick={handlePlayPause}
            className="flex justify-center items-center w-9 h-9 cursor-pointer"
          >
            {!isReady && (
              <span className="flex justify-center items-center w-6 h-6 animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-neutral-600" />
              </span>
            )}
            {isReady && isPlaying && <PauseIcon className="fill-neutral-600" />}
            {isReady && !isPlaying && <PlayIcon className="fill-neutral-600" />}
          </button>
          <button
            onClick={handleNext}
            className="flex justify-center items-center w-5 h-5 cursor-pointer"
          >
            <EndIcon className="fill-neutral-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

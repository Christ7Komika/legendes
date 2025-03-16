import clsx from "clsx";
import { AlbumCartType } from "../../types/album";
import { LoaderIcon, PauseIcon, PlayIcon } from "../icons/Icons";

type TrackCardProps = {
  data: AlbumCartType;
  playTrack: (index: number) => void;
  isPlaying: boolean;
  isReady: boolean;
  currentTrack: AlbumCartType;
};

export default function TrackCard({
  data,
  playTrack,
  isPlaying,
  isReady,
  currentTrack,
}: TrackCardProps) {
  return (
    <div
      className={`
      relative w-full max-w-md bg-white/95 p-3 rounded-xl shadow-md
      backdrop-blur-xl border border-white/30 transform-gpu mb-1 shadow-neutral-300/20
      ${data.id === currentTrack.id ? "ring-2 ring-blue-400" : ""}
      `}
    >
      <div className="items-center gap-x-1.5 grid grid-cols-[40px_1fr_20px]">
        <div
          className={clsx(
            "bg-amber-400 rounded-full w-[40px] h-[40px] overflow-hidden duration-500 ease-linear",
            isPlaying && data.id === currentTrack.id && "animate-spin"
          )}
        >
          <img
            src={data.cover}
            alt={data.title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col -space-y-1 mb-1">
          <span className="font-semibold text-neutral-800 text-sm">
            {data.title}
          </span>
          <span className="max-w-[190px] text-neutral-500 text-xs">
            {data.artist}
          </span>
        </div>
        <button
          onClick={() => playTrack(data.id - 1)}
          className="text-sm leading-tight cursor-pointer"
        >
          <span className="flex justify-center items-center w-5 h-5">
            {!isReady && currentTrack.id === data.id && (
              <span className="flex animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-neutral-600" />
              </span>
            )}
            {!isReady && currentTrack.id !== data.id && (
              <PlayIcon className="fill-neutral-600" />
            )}
            {isReady && currentTrack.id === data.id && isPlaying && (
              <PauseIcon className="fill-neutral-600" />
            )}
            {isReady && currentTrack.id === data.id && !isPlaying && (
              <PlayIcon className="fill-neutral-600" />
            )}
            {isReady && currentTrack.id !== data.id && (
              <PlayIcon className="fill-neutral-600" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

import Stream from "../../public/assets/stream.webp";
import {
  EndIcon,
  LoaderIcon,
  PauseIcon,
  PlayIcon,
  StartIcon,
} from "./icons/Icons";

type PlayerProps = {
  title: string;
  waveRef: React.RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  handlePlayPause: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  isReady: boolean;
};

export default function Player({
  waveRef,
  isPlaying,
  handleNext,
  handlePlayPause,
  handlePrev,
  title,
  isReady,
}: PlayerProps) {
  return (
    <div className="bottom-0 left-0 z-30 fixed flex justify-center xss:justify-between items-center gap-x-8 bg-black p-3 w-full">
      <div className="hidden xss:flex gap-x-4 min-w-[280px]">
        <div className="w-[70px] h-[70px]">
          <img
            src={Stream}
            alt="Nani a Kosi"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="text-white">
          <h2 className="font-medium text-xl">{title}</h2>
          <h3 className="uppercase tracking-widest">Legendes</h3>
        </div>
      </div>
      <div className="hidden md:block w-full h-full">
        <div className="w-full" ref={waveRef} />
      </div>
      <div className="flex items-center gap-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handlePrev();
          }}
          className="flex justify-center items-center p-0 w-6 h-6 cursor-pointer"
        >
          <StartIcon />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handlePlayPause();
          }}
          className="flex justify-center items-center p-0 w-14 h-14 cursor-pointer"
        >
          {!isReady && (
            <span className="flex justify-center items-center w-6 h-6 animate-spin duration-500 ease-in-out">
              <LoaderIcon className="fill-white" />
            </span>
          )}
          {isReady && isPlaying && <PauseIcon />}
          {isReady && !isPlaying && <PlayIcon />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleNext();
          }}
          className="flex justify-center items-center w-6 h-6 cursor-pointer"
        >
          <EndIcon />
        </button>
      </div>
    </div>
  );
}

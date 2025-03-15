import Stream from "../../public/assets/stream.webp";
import {
  EndIcon,
  LoaderIcon,
  PauseIcon,
  PlayIcon,
  StartIcon,
} from "./icons/Icons";

type PlayerProps = {
  handlePlayPause: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  isPlaying: boolean;
  isReady: boolean;
};

export default function Hero({
  handleNext,
  handlePlayPause,
  handlePrev,
  isReady,
  isPlaying,
}: PlayerProps) {
  return (
    <div className="relative">
      <div className="top-1/2 left-1/2 absolute flex justify-center items-center p-2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-full max-w-[400px] h-[450px] pointer-events-none">
          <img
            src={Stream}
            className="w-full h-full object-center object-cover pointer-events-none"
          />
        </div>
      </div>
      <div className="bg-zinc-100 h-[510px]">
        <div className="flex flex-col justify-center space-y-4 mx-auto px-2 pt-20 max-w-[750px]">
          <h2 className="mx-auto font-bold text-3xl text-center tracking-widest">
            NANI A KOSSI YO
          </h2>
          <span className="block bg-black mx-auto mt-4 w-[60px] h-[1px]"></span>
          <div className="space-y-1">
            <h3 className="font-bold text-center">NANI A KOSSI YO</h3>
            <p className="text-center">Disponible en achat et streaming</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#131112] h-[510px]">
        <div className="flex items-center gap-x-3 pt-28">
          <button
            onClick={handlePrev}
            className="flex justify-center items-center p-0 w-7 h-7 cursor-pointer"
          >
            <StartIcon color="#ccc" />
          </button>
          <button
            onClick={handlePlayPause}
            className="flex justify-center items-center p-0 w-16 h-16 cursor-pointer"
          >
            {!isReady && (
              <span className="flex justify-center items-center w-8 h-8 animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-white" />
              </span>
            )}
            {isReady && isPlaying && <PauseIcon color="#ccc" />}
            {isReady && !isPlaying && <PlayIcon color="#ccc" />}
          </button>
          <button
            onClick={handleNext}
            className="flex justify-center items-center w-7 h-7 cursor-pointer"
          >
            <EndIcon color="#ccc" />
          </button>
        </div>
      </div>
    </div>
  );
}

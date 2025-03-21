import Youtube from "../../public/assets/youtube.webp";
import AppleMusic from "../../public/assets/apple.webp";
import Spotify from "../../public/assets/spotify.webp";

export default function Platform() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-zinc-200 border-t-2 h-full max-h-fit md:max-h-[528px]">
      <a href="https://www.youtube.com/@albumlegendes" target="_blank">
        <div className="group relative overflow-hidden cursor-pointer">
          <img
            src={Youtube}
            alt="Project Youtube plateforme"
            className="w-full scale-100 group-hover:scale-125 transition-all duration-300"
          />
          <div className="top-0 left-0 absolute flex flex-col justify-center items-center space-y-1 w-full h-full text-white transition-all translate-y-0 group-hover:-translate-y-4 duration-500">
            <h2 className="font-semibold md:text-3xl text-4xl lg:text-4xl xl:text-5xl xss:text-6xl">
              YOUTUBE
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition translate-y-1 group-hover:-translate-y-0.5 duration-300">
              Visit the chanel
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://music.apple.com/us/album/legendes/1795858926"
        target="_blank"
      >
        <div className="group relative overflow-hidden cursor-pointer">
          <img
            src={AppleMusic}
            alt="Project Apple Music plateforme"
            className="w-full scale-100 group-hover:scale-125 transition-all duration-300"
          />
          <div className="top-0 left-0 absolute flex flex-col justify-center items-center space-y-1 w-full h-full text-white transition-all translate-y-0 group-hover:-translate-y-4 duration-500">
            <h2 className="font-semibold md:text-3xl text-4xl lg:text-4xl xl:text-5xl xss:text-6xl">
              APPLE MUSIC
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition translate-y-1 group-hover:-translate-y-0.5 duration-300">
              Listen Now
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://open.spotify.com/album/277C17LOYOy8OSm6s4vo4h?si=1&nd=1&dlsi=dfc3adb71b8f49a2"
        target="_blank"
      >
        <div className="group relative overflow-hidden cursor-pointer">
          <img
            src={Spotify}
            alt="Project Spotify plateforme"
            className="w-full scale-100 group-hover:scale-125 transition-all duration-300"
          />
          <div className="top-0 left-0 absolute flex flex-col justify-center items-center space-y-1 w-full h-full text-white transition-all translate-y-0 group-hover:-translate-y-4 duration-500">
            <h2 className="font-semibold md:text-3xl text-4xl lg:text-4xl xl:text-5xl xss:text-6xl">
              SPOTIFY
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition translate-y-1 group-hover:-translate-y-0.5 duration-300">
              Look at my journey
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

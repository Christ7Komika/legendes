import Album from "../components/Album";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import Player from "../components/Player";
import Project from "../components/Project";
import UpTo from "../components/UpTo";
import Song from "../../public/media/song.mp3";
import useAudio from "../hooks/useAudio";

export default function Home() {
  const { waveRef, isPlaying, handlePlayPause, handlePrev, handleNext } =
    useAudio({ audioUrl: Song });
  return (
    <div className="relative">
      <title>LEGENDES | Accueil</title>
      <UpTo />
      <Player
        waveRef={waveRef}
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePlayPause={handlePlayPause}
        handlePrev={handlePrev}
      />
      <Header />
      <Hero
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePlayPause={handlePlayPause}
        handlePrev={handlePrev}
      />
      <Album />
      <Project />
      <Platform />
      <Footer />
    </div>
  );
}

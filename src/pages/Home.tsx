import Album from "../components/Album";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import Player from "../components/Player";
import Project from "../components/Project";
import UpTo from "../components/UpTo";
import useAudio from "../hooks/useAudio";
import Init from "../components/Init";
import Sales from "../components/Sales";
import { useRef } from "react";

export default function Home() {
  const {
    waveRef,
    isPlaying,
    handlePlayPause,
    handlePrev,
    handleNext,
    currentTrack,
    isReady,
    playTrack,
  } = useAudio({});

  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <title>LEGENDES | Accueil</title>
      <Sales />
      <Init />
      <UpTo />
      <Player
        title={currentTrack.title}
        waveRef={waveRef}
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePlayPause={handlePlayPause}
        handlePrev={handlePrev}
        isReady={isReady}
      />
      <Header />
      <Hero />
      <Album
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePlayPause={handlePlayPause}
        handlePrev={handlePrev}
        isReady={isReady}
        currentTrack={currentTrack}
        playTrack={playTrack}
      />
      <Project />
      <Platform />
      <Footer footerRef={footerRef} />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { albums } from "../datas/albums";

type AudioWaveProps = {
    waveColor?: string;
    progressColor?: string;
    height?: number;
};

export default function useAudio({
    waveColor = "#aaa",
    progressColor = "#fff",
    height = 40,
}: AudioWaveProps) {
    const waveRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [canPlay, setCanPlay] = useState(false);
    const [isReady, setIsReady] = useState(false); // ✅ Suivi de l'état prêt

    const currentTrack = albums[currentTrackIndex];

    useEffect(() => {
        if (!waveRef.current) return;

        if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
            wavesurferRef.current = null;
        }

        setIsReady(false); // 🚀 Indique que la nouvelle musique n'est pas prête

        const wavesurfer = WaveSurfer.create({
            container: waveRef.current,
            waveColor,
            progressColor,
            height,
            cursorWidth: 1,
            cursorColor: "#333",
            barWidth: 2,
            barGap: 1,
            barRadius: 2,
        });

        wavesurferRef.current = wavesurfer;
        wavesurfer.load(currentTrack.song);

        wavesurfer.on("ready", () => {
            setDuration(wavesurfer.getDuration());
            setIsReady(true); // ✅ La musique est prête
            if (canPlay) {
                wavesurfer.play();
                setIsPlaying(true);
            }
        });

        wavesurfer.on("audioprocess", () => setCurrentTime(wavesurfer.getCurrentTime()));
        wavesurfer.on("play", () => setIsPlaying(true));
        wavesurfer.on("pause", () => setIsPlaying(false));
        wavesurfer.on("finish", handleNext);

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, [currentTrackIndex, canPlay]);

    function enablePlay() {
        setCanPlay(true);
        document.removeEventListener("click", enablePlay);
    }

    useEffect(() => {
        document.addEventListener("click", enablePlay);
        return () => document.removeEventListener("click", enablePlay);
    }, []);

    function handlePlayPause() {
        if (isReady) { // ✅ Joue uniquement si la musique est prête
            wavesurferRef.current?.playPause();
        }
    }

    function handleRestart() {
        if (wavesurferRef.current) {
            wavesurferRef.current.seekTo(0);
            setCurrentTime(0);
            if (!isPlaying && isReady) { // ✅ Vérifie `isReady`
                wavesurferRef.current.play();
            }
        }
    }

    function handleNext() {
        if (!isReady) return; // ✅ Empêche le changement si la musique n'est pas prête
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % albums.length);
    }

    function handlePrev() {
        if (!isReady) return; // ✅ Empêche le changement si la musique n'est pas prête
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
    }

    return {
        waveRef,
        duration,
        currentTime,
        isPlaying,
        isReady, // ✅ Permet au composant d'afficher un indicateur de chargement si nécessaire
        currentTrack,
        handlePlayPause,
        handleRestart,
        handleNext,
        handlePrev,
    };
}

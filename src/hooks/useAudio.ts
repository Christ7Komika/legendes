import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { albums } from "../datas/albums";

type AudioWaveProps = {
    waveColor?: string;
    progressColor?: string;
    height?: number;
    enableAutoPlayNext?: boolean; // ✅ Nouveau paramètre
};

export default function useAudio({
    waveColor = "#aaa",
    progressColor = "#fff",
    height = 40,
    enableAutoPlayNext = true, // ✅ Valeur par défaut
}: AudioWaveProps) {
    const waveRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [canPlay, setCanPlay] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const currentTrack = albums[currentTrackIndex];

    useEffect(() => {
        if (!waveRef.current) return;

        if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
            wavesurferRef.current = null;
        }

        setIsReady(false);

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
            setIsReady(true);
            if (canPlay) {
                wavesurfer.play();
                setIsPlaying(true);
            }
        });

        wavesurfer.on("audioprocess", () => setCurrentTime(wavesurfer.getCurrentTime()));
        wavesurfer.on("play", () => setIsPlaying(true));
        wavesurfer.on("pause", () => setIsPlaying(false));
        wavesurfer.on("finish", () => {
            if (enableAutoPlayNext) handleNext(); // ✅ Utilisation du paramètre
        });

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, [currentTrackIndex, canPlay, enableAutoPlayNext]);

    function enablePlay() {
        setCanPlay(true);
        document.removeEventListener("click", enablePlay);
    }

    useEffect(() => {
        document.addEventListener("click", enablePlay);
        return () => document.removeEventListener("click", enablePlay);
    }, []);

    function handlePlayPause() {
        if (isReady) {
            wavesurferRef.current?.playPause();
        }
    }

    function handleRestart() {
        if (wavesurferRef.current) {
            wavesurferRef.current.seekTo(0);
            setCurrentTime(0);
            if (!isPlaying && isReady) {
                wavesurferRef.current.play();
            }
        }
    }

    function handleNext() {
        if (!isReady) return;
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % albums.length);
    }

    function handlePrev() {
        if (!isReady) return;
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
    }

    function playTrack(index: number) {
        if (index === currentTrackIndex) {
            handlePlayPause();
        } else {
            if (isPlaying) {
                wavesurferRef.current?.pause();
            }
            setCurrentTrackIndex(index);
        }
    }

    return {
        waveRef,
        duration,
        currentTime,
        isPlaying,
        isReady,
        currentTrack,
        handlePlayPause,
        handleRestart,
        handleNext,
        handlePrev,
        playTrack,
    };
}

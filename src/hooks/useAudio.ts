import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { albums } from "../datas/albums";

type AudioWaveProps = {
    waveColor?: string;
    progressColor?: string;
    height?: number;
    enableAutoPlayNext?: boolean;
};

export default function useAudio({
    waveColor = "#aaa",
    progressColor = "#fff",
    height = 40,
    enableAutoPlayNext = true,
}: AudioWaveProps) {
    const waveRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
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
            if (isPlaying) {
                wavesurfer.play();
            }
        });

        wavesurfer.on("audioprocess", () => setCurrentTime(wavesurfer.getCurrentTime()));
        wavesurfer.on("play", () => setIsPlaying(true));
        wavesurfer.on("pause", () => setIsPlaying(false));
        wavesurfer.on("finish", () => {
            if (enableAutoPlayNext) handleNext();
        });

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, [currentTrackIndex, isPlaying, enableAutoPlayNext]);

    useEffect(() => {
        // Lancer la lecture de l'audio dès que l'utilisateur clique sur play
        if (isReady && isPlaying) {
            wavesurferRef.current?.play();
        }
    }, [isReady, isPlaying]); // Déclenche uniquement quand l'audio est prêt et que la lecture est demandée

    function handlePlayPause() {
        if (isReady) {
            if (isPlaying) {
                wavesurferRef.current?.pause();
            } else {
                wavesurferRef.current?.play();
            }
            setIsPlaying((prev) => !prev); // Inverser l'état de lecture
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
            setCurrentTrackIndex(index);
            setIsPlaying(true);
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

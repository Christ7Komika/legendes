import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type AudioWaveProps = {
    audioUrl: string;
    waveColor?: string;
    progressColor?: string;
    height?: number;
    onNext?: () => void;
    onPrev?: () => void;
};

export default function useAudio({
    audioUrl,
    waveColor = "#aaa",
    progressColor = "#fff",
    height = 40,
    onNext,
    onPrev
}: AudioWaveProps) {
    const waveRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        // Vérifier si le conteneur existe
        if (!waveRef.current) return;

        // Nettoyer toute instance précédente
        if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
            wavesurferRef.current = null;
        }

        // Création de l'instance WaveSurfer
        const wavesurfer = WaveSurfer.create({
            container: waveRef.current,
            waveColor: waveColor,
            progressColor: progressColor,
            height: height,
            cursorWidth: 1,
            cursorColor: "#333",
            barWidth: 2,
            barGap: 1,
            barRadius: 2,
        });

        // Assigner l'instance à la référence
        wavesurferRef.current = wavesurfer;

        // Chargement du fichier audio
        wavesurfer.load(audioUrl);

        // Enregistrement des événements
        wavesurfer.on("ready", () => {
            setDuration(wavesurfer.getDuration());
        });

        wavesurfer.on("audioprocess", () => {
            setCurrentTime(wavesurfer.getCurrentTime());
        });

        wavesurfer.on("play", () => setIsPlaying(true));
        wavesurfer.on("pause", () => setIsPlaying(false));
        wavesurfer.on("finish", () => setIsPlaying(false));

        // Nettoyage à la destruction du composant
        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, [audioUrl, waveColor, progressColor, height]);

    // Reste du code inchangé...
    function handlePlayPause() {
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
        }
    }

    function handleRestart() {
        if (wavesurferRef.current) {
            wavesurferRef.current.seekTo(0);
            setCurrentTime(0);
            if (!isPlaying) {
                wavesurferRef.current.play();
            }
        }
    }

    function handleNext() {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            }
            if (onNext) {
                onNext();
            }
        }
    }

    function handlePrev() {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            }
            if (onPrev) {
                onPrev();
            }
        }
    }

    return {
        waveRef,
        duration,
        currentTime,
        isPlaying,
        handlePlayPause,
        handleRestart,
        handleNext,
        handlePrev
    };
}
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { albums } from "../../datas/albums";
import TrackCard from "./TrackCard";
import { AlbumCartType } from "../../types/album";

type TrackListProps = {
  playTrack: (index: number) => void;
  isPlaying: boolean;
  isReady: boolean;
  currentTrack: AlbumCartType;
};

export default function TrackList({
  playTrack,
  isPlaying,
  isReady,
  currentTrack,
}: TrackListProps) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(58 * (albums.length - 1));
  }, [height, albums.length]);

  return (
    <motion.div className="flex flex-col items-center gap-y-1 bg-neutral-50 mx-auto p-3 rounded-2xl max-w-full xss:max-w-[350px] h-[450px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-2 first:mt-[10px] w-full"
        drag="y"
        dragConstraints={{
          top: -height,
          bottom: 0,
        }}
      >
        {albums.map((album) => (
          <TrackCard
            key={album.id}
            data={album}
            playTrack={playTrack}
            isPlaying={isPlaying}
            isReady={isReady}
            currentTrack={currentTrack}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

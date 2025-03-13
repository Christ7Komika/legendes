"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlbumCartType } from "../../types/album";
import CardCart from "./CardCart";

type SlideCartListProps = {
  albums: AlbumCartType[];
  removeAlbum: (id: number) => void;
};

export default function SlideCartList({
  albums,
  removeAlbum,
}: SlideCartListProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(300 * (albums.length - 1) + 40);
  }, [width, albums.length]);

  return (
    <motion.div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-2 first:ml-[10px] py-[10px] w-full"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {albums.map((album) => (
          <CardCart
            key={album.id}
            album={album}
            removeAlbum={removeAlbum}
            shadow="md"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

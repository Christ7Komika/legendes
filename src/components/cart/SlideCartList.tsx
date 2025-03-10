"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log({
      scroll: sliderRef.current!.scrollWidth,
      offset: sliderRef.current!.offsetWidth,
    });
    setWidth(
      sliderRef.current!.offsetWidth / albums.length - albums.length * 10
    );
  }, []);

  return (
    <motion.div ref={sliderRef} className="w-full overflow-hidden">
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

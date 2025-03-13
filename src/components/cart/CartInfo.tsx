import { AlbumCartType } from "../../types/album";

type CartInfoProps = {
  album: AlbumCartType;
};

export default function CartInfo({ album }: CartInfoProps) {
  return (
    <div className="bg-white pb-4 rounded-lg overflow-hidden">
      <div className="w-full">
        <img src={album.cover} alt={album.title} className="w-full h-full" />
      </div>
      <div className="px-3 pt-3">
        <h2 className="font-semibold text-lg">{album.title}</h2>
        <p className="text-neutral-500 text-sm">{album.price}</p>
      </div>
    </div>
  );
}

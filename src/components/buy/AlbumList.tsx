import { albums } from "../../datas/albums";
import AlbumCart from "../card/AlbumCart";

export default function AlbumList() {
  return (
    <div className="px-2">
      <div className="gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto py-24 max-w-[1150px] h-fit">
        {albums.map((album) => (
          <AlbumCart key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
}

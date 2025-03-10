import { albums } from "../../datas/albums";
import AlbumCart from "../card/AlbumCart";

export default function AlbumList() {
  return (
    <div className="px-2">
      <div className="gap-x-2 gap-y-20 lg:gap-x-5 xl:gap-x-10 grid grid-cols-1 md:grid-cols-2 mx-auto py-24 max-w-[1150px] h-fit">
        {albums.map((album) => (
          <AlbumCart key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
}

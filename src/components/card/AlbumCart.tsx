import useAlbums from "../../stores/albums";
import { AlbumCartType } from "../../types/album";

export default function AlbumCart({ id, cover, title, price }: AlbumCartType) {
  const addAlbum = useAlbums.use.addAlbum();
  const album = useAlbums.use.albums();

  function handleAlbum() {
    const album = { id, cover, title, price };
    addAlbum(album);
  }

  return (
    <div className="space-y-6 w-full h-fit">
      <div className="w-full max-w-full md:max-w-[550px] h-full max-h-fit md:max-h-[550px]">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-lg text-center">{title}</h2>
        <p className="font-light text-neutral-400 text-4xl text-center">
          {price}
        </p>
      </div>
      <button
        onClick={handleAlbum}
        className="flex mx-auto px-8 py-2 border border-neutral-300 text-zinc-500 text-center cursor-pointer"
      >
        {album.filter((e) => e.id === id).length === 1
          ? "Article ajouté"
          : "Ajouter"}
      </button>
    </div>
  );
}

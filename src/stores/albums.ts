import { create } from "zustand/react"
import { AlbumCartType } from "../types/album";
import { cookieStorage, createJSONStorage, createSelectors, persist } from "./store";

type AlbumProps = {
    albums: AlbumCartType[]
    addAlbum: (newAlbum: AlbumCartType) => void;
    removeAlbum: (id: number) => void;
    editQuantity: (id: number, quantity: number) => void;
    clear: () => void;
}

const useAlbums = createSelectors(create<AlbumProps>()(
    persist(
        (set) => ({
            albums: [],
            addAlbum(newAlbum) {
                const oldAlbums = useAlbums.getState().albums;
                const isExist = oldAlbums.find(e => e.id === newAlbum.id);
                if (isExist) {
                    set({ albums: oldAlbums.filter(e => e.id !== newAlbum.id) });
                    return
                }
                const albumsFilter = Array.isArray(oldAlbums) ? [...oldAlbums] : [];
                const albums = (albumsFilter.length > 0 ? [...albumsFilter.filter(album => album.id !== newAlbum.id), newAlbum] : [newAlbum])
                set({ albums })
            },
            editQuantity(id, quantity) {
                const albums = useAlbums.getState().albums;
                const currentAlbum = albums.find(v => v.id === id)
                if (!currentAlbum) return
                set({ albums: [...(albums.filter(v => v.id !== id)), { ...currentAlbum, quantity }] })
            },
            removeAlbum(id) {
                const oldAlbums = useAlbums.getState().albums;
                const albumsFilter = Array.isArray(oldAlbums) ? [...oldAlbums] : [];
                const albums = albumsFilter.filter(v => v.id !== id);
                set({ albums })
            },
            clear() {
                set({ albums: [] });
            },
        }),
        {
            name: "albums",
            storage: createJSONStorage(() => cookieStorage),
        }
    )
))

export default useAlbums;



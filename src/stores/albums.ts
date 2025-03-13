import { create } from "zustand/react"
import { AlbumCartType } from "../types/album";
import { cookieStorage, createJSONStorage, createSelectors, persist } from "./store";

type AlbumProps = {
    state: "load" | "success",
    albums: AlbumCartType[],
    username: string;
    email: string;
    setState: (state: "load" | "success") => void;
    setUserInfos: (username: string, email?: string) => void;
    addAlbum: (newAlbum: AlbumCartType) => void;
    removeAlbum: (id: number) => void;
    clear: () => void;
}

const useAlbums = createSelectors(create<AlbumProps>()(
    persist(
        (set) => ({
            state: "load",
            username: "",
            email: "",
            albums: [],
            setState(state) {
                set({ state })
            },
            setUserInfos(username, email) {
                set({
                    username: username,
                    email: email ?? ""
                })
            },
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



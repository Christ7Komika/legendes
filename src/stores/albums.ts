import { create } from "zustand/react"
import { AlbumCartType, PlaylistKeyType, PlaylistType } from "../types/album";
import { cookieStorage, createJSONStorage, createSelectors, persist } from "./store";

type AlbumProps = {
    playlist: PlaylistType;
    state: "load" | "success",
    albums: AlbumCartType[],
    all: boolean;
    username: string;
    email: string;
    setAll: (state: boolean) => void
    pushAlbums: (newAlbum: AlbumCartType[]) => void;
    setPlaylist: (song: PlaylistKeyType) => void
    setState: (state: "load" | "success") => void;
    setUserInfos: (username: string, email?: string) => void;
    addAlbum: (newAlbum: AlbumCartType) => void;
    removeAlbum: (id: number) => void;
    clear: () => void;
}

const useAlbums = createSelectors(create<AlbumProps>()(
    persist(
        (set) => ({
            playlist: {
                "Nani à Kossi Yo": false,
                "Les vieux la nous bloquent": false,
                "Ebeba Kaka": false,
                "Problème": false,
                "Ralenti": false,
                "Tu ignores quoi": false,
                "Ntaba na goût": false,
                "Boniama": false,
                "Moselebende": false,
                "Na loba nini": false,
                "Comment oublier": false,
                "Rando Rando": false,
                "Na ke": false,
            },
            all: false,
            state: "load",
            username: "",
            email: "",
            albums: [],
            pushAlbums(songs) {
                set({ albums: [...songs] })
            },
            setAll(state) {
                set({ all: state })
            },
            setPlaylist(song) {
                const playlist = useAlbums.getState().playlist;
                set({ playlist: { ...playlist, [song]: true } })
            },
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



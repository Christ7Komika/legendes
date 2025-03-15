export type AlbumCartType = {
    id: number;
    cover: string;
    title: string;
    artist?: string
    price: string;
    song: string;
};

export type PlaylistType = {
    "Nani à Kossi Yo": boolean;
    "Les vieux la nous bloquent": boolean;
    "Ebeba Kaka": boolean;
    "Problème": boolean;
    "Ralenti": boolean;
    "Tu ignores quoi": boolean;
    "Ntaba na goût": boolean;
    "Boniama": boolean;
    "Moselebende": boolean;
    "Na loba nini": boolean;
    "Comment oublier": boolean;
    "Rando Rando": boolean;
    "Na ke": boolean;
}

export type PlaylistKeyType = keyof PlaylistType;
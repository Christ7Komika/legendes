import { AlbumCartType } from "../types/album";
import Cover from "../../public/assets/stream.webp";
import NANI_A_KOSSI_YO from "../../public/media/1- Intro Nani a kossi yo_Mixton x teddy benzo.mp3";
import LVBN from "../../public/media/2-L.V.N. B Mixton x Teddy benzo.mp3";
import EBETA_KAKA from "../../public/media/3-E beba kaka X Ba2ry X Le Tchega.mp3";
import PROBLEME from "../../public/media/4- problèmes Teddy benzo x Mixton.mp3";
import RALENTI from "../../public/media/5- ralenti Mixton x Teddy benzo x Rodzeng.mp3";
import TU_IGNORES_QUOI from "../../public/media/6-Tu ignores quoi_ Teddy benzo & Mixton.mp3";
import NTABA_NA_GOUT from "../../public/media/7-Ntaba na gout Teddy benzo x Mixton x Mudiayo x Spinho x Shibae.mp3";
import BONIAMA from "../../public/media/8-Boniama_Teddy Benzo x Mixton.mp3";
import MOSELEBENDE from "../../public/media/9- Moselebende Spinho x Mixton X Teddy Benzo Prod by Js.mp3";
import NA_LOBA_NINI from "../../public/media/10-Na Loba Nini Mixton x Teddy benzo.mp3";
import COMMENT_OUBLIER from "../../public/media/11-comment Oublier  Mixton x Teddy benzo.mp3";
import RANDO from "../../public/media/12-Rando Mixton x Teddy benzo x spinho.mp3";
import NA_KE from "../../public/media/13- Na Ke Mixton x Teddy benzo.mp3";

export const albums: AlbumCartType[] = [
    { id: 1, cover: Cover, title: "Nani à Kossi Yo", price: "500.00 CFA", song: NANI_A_KOSSI_YO },
    { id: 2, cover: Cover, title: "L.V.N.B", price: "500.00 CFA", song: LVBN },
    { id: 3, cover: Cover, title: "Ebeba Kaka", price: "500.00 CFA", song: EBETA_KAKA },
    { id: 4, cover: Cover, title: "Problème", price: "500.00 CFA", song: PROBLEME },
    { id: 5, cover: Cover, title: "Ralenti", price: "500.00 CFA", song: RALENTI },
    { id: 6, cover: Cover, title: "Tu ignores quoi", price: "500.00 CFA", song: TU_IGNORES_QUOI },
    { id: 7, cover: Cover, title: "Ntaba na goût", price: "500.00 CFA", song: NTABA_NA_GOUT },
    { id: 8, cover: Cover, title: "Boniama", price: "500.00 CFA", song: BONIAMA },
    { id: 9, cover: Cover, title: "Moselebende", price: "500.00 CFA", song: MOSELEBENDE },
    { id: 10, cover: Cover, title: "Na loba nini", price: "500.00 CFA", song: NA_LOBA_NINI },
    { id: 11, cover: Cover, title: "Comment oublier", price: "500.00 CFA", song: COMMENT_OUBLIER },
    { id: 12, cover: Cover, title: "Rando Rando", price: "500.00 CFA", song: RANDO },
    { id: 13, cover: Cover, title: "Na ke", price: "500.00 CFA", song: NA_KE },
];
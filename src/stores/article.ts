import { create } from "zustand/react"
import { cookieStorage, createJSONStorage, createSelectors, persist } from "./store";

type ArticleProps = {
    id: string;
    downloadId: string;
    clientSecret: string;
    setId: (id: string) => void;
    setDownloadId: (id: string) => void;
    clear: () => void;
}

const useArticle = createSelectors(create<ArticleProps>()(
    persist(
        (set) => ({
            id: "",
            clientSecret: "",
            downloadId: "",
            setDownloadId(id) {
                set({ downloadId: id })
            },
            setId(id) {
                set({ id })
            },
            clear() {
                set({ id: "" });
            },
        }),
        {
            name: "article",
            storage: createJSONStorage(() => cookieStorage),
        }
    )
))

export default useArticle;



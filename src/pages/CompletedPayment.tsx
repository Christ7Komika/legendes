import { useEffect, useRef, useState } from "react";
import useArticle from "../stores/article";
import { SERVER_HOST } from "../lib/constant";
import useAlbums from "../stores/albums";
import Footer from "../components/Footer";
import { CheckIcon, LoaderIcon } from "../components/icons/Icons";
import NotFound from "../components/NotFound";
import { PlaylistKeyType } from "../types/album";

export default function CompletedPayment() {
  const id = useArticle.use.id();
  const albums = useAlbums.use.albums();
  const playlistState = useAlbums.use.playlist();
  const setPlaylistState = useAlbums.use.setPlaylist();
  const setState = useAlbums.use.setState();
  const downloadId = useArticle.use.downloadId();
  const setDownloadId = useArticle.use.setDownloadId();
  const [isPending, setIsPending] = useState(true);
  const [downloadLoader, setDownloadLoader] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return; // Si déjà exécuté, ne rien faire
    didFetch.current = true;
    setIsPending(true);
    if (albums.length > 0) {
      fetch(`${SERVER_HOST}/get-checkout-session`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ id, playlist: albums }),
      })
        .then(async (r) => {
          const { id: saleId, songs } = await r.json();
          setDownloadId(saleId);
          setPlaylist(songs);
          setState("success");
        })
        .finally(() => {
          setIsPending(false);
        });
    }
  }, [albums.length]);

  async function download(e: React.SyntheticEvent, song: string) {
    e.preventDefault();
    if (downloadId) {
      setDownloadLoader(true);
      const controller = new AbortController();
      try {
        const response = await fetch(`${SERVER_HOST}/get-songs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, downloadId, song }), // Ajout de downloadId
          credentials: "include",
          mode: "cors",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const blob = await response.blob();

        if (blob) {
          const url = window.URL.createObjectURL(blob);
          setPlaylistState(song as PlaylistKeyType);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${song}.mp3`); // 🔥 Fichier MP3 avec nom dynamique
          document.body.appendChild(link);
          link.click();

          // Nettoyage
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        } else {
          throw new Error("Réponse invalide du serveur");
        }
      } catch (err) {
        console.error("Erreur lors du téléchargement:", err);
      } finally {
        setDownloadLoader(false); // Arrêter le loader
      }
    }
  }

  if (albums.length === 0) {
    return (
      <div className="px-2">
        <NotFound />
      </div>
    );
  }

  if (isPending)
    return (
      <>
        <title>LEGENDES | Télécharger</title>
        <div className="flex justify-center items-center w-dvw h-dvh">
          <span className="flex justify-center items-center w-6 h-6 animate-spin duration-500 ease-in-out">
            <LoaderIcon />
          </span>
        </div>
      </>
    );

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex flex-col flex-[1] justify-center items-center gap-4 px-2 w-dvw h-full">
        <p className="bg-emerald-600/5 p-4 border border-emerald-600 rounded-xl max-w-md text-emerald-600 text-sm text-center">
          Votre paiement a été validé avec succès ! Vous pouvez maintenant
          télécharger votre contenu.
        </p>
        <div className="flex justify-center py-1">
          {downloadLoader && (
            <span className="flex justify-center items-center gap-x-2">
              <span className="flex justify-center items-center w-5 h-5 animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-neutral-700" />
              </span>
              Téléchargement...
            </span>
          )}
        </div>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-[950px]">
          {playlist.map((song, index) => (
            <button
              key={index}
              onClick={(e) => download(e, song)}
              className="flex justify-center items-center bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded-md w-full h-10 text-white text-sm cursor-pointer"
            >
              <span className="flex items-center gap-x-2 mx-2">
                {"Télécharger " + song}
                {playlistState[song] && (
                  <span className="flex justify-center items-center w-5 h-5">
                    <CheckIcon className="fill-white" />
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
        <a href="/" className="text-neutral-600 text-sm underline">
          Retourner à la page d'acceuill
        </a>
      </div>
      <Footer />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import useArticle from "../stores/article";
import { SERVER_HOST } from "../lib/constant";
import useAlbums from "../stores/albums";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoaderIcon } from "../components/icons/Icons";
import NotFound from "../components/NotFound";

export default function CompletedPayment() {
  const id = useArticle.use.id();
  const albums = useAlbums.use.albums();
  const setState = useAlbums.use.setState();
  const downloadId = useArticle.use.downloadId();
  const setDownloadId = useArticle.use.setDownloadId();
  const [isPending, setIsPending] = useState(true);
  const [downloadLoader, setDownloadLoader] = useState(false);
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
          const { id: saleId } = await r.json();
          setDownloadId(saleId);
          setState("success");
        })
        .finally(() => {
          setIsPending(false);
        });
    }
  }, [albums.length]);

  async function download(e: React.SyntheticEvent) {
    e.preventDefault();
    if (downloadId) {
      setDownloadLoader(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 500000);

      try {
        const response = await fetch(`${SERVER_HOST}/get-songs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, downloadId }),
          credentials: "include",
          mode: "cors",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const blob = await response.blob();

        if (blob) {
          const url = window.URL.createObjectURL(new Blob([blob]));

          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Legendes.zip");
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        } else {
          throw new Error("Réponse invalide du serveur");
        }
      } catch (err) {
        console.error("Erreur lors du téléchargement:", err);
      } finally {
        clearTimeout(timeout);
        setDownloadLoader(false); // Arrêter le loader qu'il y ait une erreur ou non
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
      <div className="flex justify-center items-center w-dvw h-dvh">
        <span className="flex justify-center items-center w-6 h-6 animate-spin duration-500 ease-in-out">
          <LoaderIcon />
        </span>
      </div>
    );

  return (
    <div className="flex flex-col h-dvh">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-4 px-2 w-dvw h-full">
        <p className="bg-emerald-600/5 p-4 border border-emerald-600 rounded-xl max-w-md text-emerald-600 text-sm text-center">
          Votre paiement a été validé avec succès ! Vous pouvez maintenant
          télécharger votre contenu.
        </p>

        <button
          onClick={download}
          className="flex justify-center items-center bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded-md w-[250px] h-10 text-white cursor-pointer"
        >
          {downloadLoader ? (
            <span className="flex justify-center items-center gap-x-2">
              <span className="flex justify-center items-center w-5 h-5 animate-spin duration-500 ease-in-out">
                <LoaderIcon className="fill-white" />
              </span>
              Téléchargement...
            </span>
          ) : (
            "Télécharger maintenant"
          )}
        </button>
        <a href="/" className="text-neutral-600 text-sm underline">
          Retourner à la page d'acceuill
        </a>
        <p className="bg-blue-600/5 p-4 border border-blue-600 rounded-xl max-w-md text-blue-600 text-sm text-center">
          Veuillez noter : Une fois que vous avez cliqué sur le bouton de
          téléchargement, il se peut que cela prenne quelques instants. En
          effet, les fichiers audio que vous avez achetés sont en cours de
          compression pour garantir une expérience de téléchargement optimale.
          Nous vous remercions pour votre patience pendant ce processus.
        </p>
      </div>
      <Footer />
    </div>
  );
}

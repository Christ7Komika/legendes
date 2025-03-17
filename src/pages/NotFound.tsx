import { NotFoundIcon } from "../components/icons/Icons";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div className="space-y-3 bg-white mx-auto p-12 rounded-xl w-full max-w-[850px]">
        <span className="block mx-auto w-[150px]">
          <NotFoundIcon className="fill-neutral-500" />
        </span>
        <div className="space-y-1 mx-auto max-w-md">
          <h2 className="font-semibold text-neutral-600 text-xl text-center">
            Page introuvable
          </h2>
          <p className="text-neutral-500 text-sm text-center">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Vérifiez l'URL ou retournez à l'accueil.
          </p>
        </div>
        <a
          href="/"
          className="block bg-black mx-auto px-4 py-1 rounded-lg w-fit text-white text-sm text-center"
        >
          Retourner à l'accueil
        </a>
      </div>
    </div>
  );
}

import { ArrowLeft, XIcon } from "lucide-react";
import { AlbumCartType } from "../../types/album";
import { getPrices } from "../../lib/utils";
import MobileMoneyForm from "./MobileMoneyForm";
import { useState } from "react";

type MobileMoneyProps = {
  albums: AlbumCartType[];
};

export default function MobileMoney({ albums }: MobileMoneyProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-2 bg-white px-0 sm:px-2 w-dvw min-h-dvh">
      {show && (
        <div className="md:hidden top-0 z-40 absolute flex justify-center items-center bg-white shadow-md shadow-neutral-300/30 px-2 sm:px-4 py-9 w-full h-fit leading-0">
          <div className="mx-auto w-full max-w-[500px]">
            <div className="flex justify-between items-center gap-x-2 mb-4">
              <div className="flex items-center gap-x-2">
                <a href="/payement-echoue">
                  <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">
                    <ArrowLeft size={15} />
                  </span>
                </a>
                <h2>Komika Christopher Orlando</h2>
              </div>
              <span
                className="text-neutral-500 cursor-pointer"
                onClick={() => setShow(false)}
              >
                <XIcon size={20} />
              </span>
            </div>
            {albums.length > 0 && albums.length < 13 && (
              <div className="space-y-1">
                <div className="space-y-3">
                  {albums.map((album) => (
                    <p
                      key={album.id}
                      className="flex justify-between items-center w-full text-neutral-600 text-sm"
                    >
                      <span>{album.title}</span>
                      <span>{album.price}</span>
                    </p>
                  ))}
                </div>
                <div className="flex justify-between items-center gap-x-2 pt-5">
                  <div className="space-y-4">
                    <h2 className="text-neutral-500">Total à payer</h2>
                    <small className="text-neutral-400">
                      {albums.length} Article{albums.length > 1 && "s"}
                    </small>
                  </div>
                  <p className="text-neutral-700 text-4xl">
                    {getPrices(albums)} FCFA
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="hidden md:flex justify-center bg-neutral-50 px-4 pt-[80px]">
        <div className="w-full max-w-[500px]">
          <div className="flex items-center gap-x-2">
            <a href="/payement-echoue">
              <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">
                <ArrowLeft size={15} />
              </span>
            </a>
            <h2>Komika Christopher Orlando</h2>
          </div>
          <div className="pt-[25px] pl-6">
            {albums.length === 13 && (
              <div className="space-y-1">
                <h2 className="text-neutral-500">Album Legendes</h2>
                <p className="text-neutral-700 text-4xl">5000 FCFA</p>
              </div>
            )}
            {albums.length > 0 && albums.length < 13 && (
              <div className="space-y-1">
                <h2 className="text-neutral-500">Total à payer</h2>
                <div className="-space-y-1 mb-6">
                  <p className="text-neutral-700 text-4xl">
                    {getPrices(albums)} FCFA
                  </p>
                  <small className="text-neutral-400">
                    {albums.length} Article{albums.length > 1 && "s"}
                  </small>
                </div>
                <div className="space-y-3">
                  {albums.map((album) => (
                    <p
                      key={album.id}
                      className="flex justify-between items-center w-full text-neutral-600 text-sm"
                    >
                      <span>{album.title}</span>
                      <span>{album.price}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center shadow-neutral-500/30 shadow-none md:shadow-2xl px-2 sm:px-4 pt-[80px] md:h-fit min-h-dvh">
        <div className="md:hidden flex items-center gap-x-2">
          <a href="/payement-echoue">
            <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">
              <ArrowLeft size={15} />
            </span>
          </a>
          <h2>Komika Christopher Orlando</h2>
        </div>
        <div className="md:hidden block pt-[25px] pl-6">
          {albums.length === 13 && (
            <div className="space-y-1">
              <h2 className="text-neutral-500">Album Legendes</h2>
              <p className="text-neutral-700 text-4xl">5000 FCFA</p>
            </div>
          )}
          {albums.length > 0 && albums.length < 13 && (
            <div className="space-y-1">
              <div className="flex flex-col items-center space-y-1 mb-4">
                <p className="text-neutral-700 text-4xl">
                  {getPrices(albums)} FCFA
                </p>
                <small className="text-neutral-400 text-center">
                  {albums.length} Article{albums.length > 1 && "s"}
                </small>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => setShow(true)}
          className="md:hidden block bg-neutral-100 mb-4 rounded-md w-[150px] h-10 text-neutral-700 text-sm text-center cursor-pointer"
        >
          Afficher les détails
        </button>
        <h2 className="mb-[25px] w-full max-w-[340px] md:text-left text-center">
          Payer par MTN MOMO
        </h2>
        <MobileMoneyForm />
      </div>
    </div>
  );
}

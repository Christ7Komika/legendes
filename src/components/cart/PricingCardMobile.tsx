import { useEffect, useLayoutEffect, useState } from "react";
import { UpIcon } from "../icons/Icons";
import Button from "../ui/Button";
import SlideCartList from "./SlideCartList";
import { AlbumCartType } from "../../types/album";
import { getPrices } from "../../lib/utils";
import { SERVER_HOST } from "../../lib/constant";
import axios from "axios";
import useArticle from "../../stores/article";

type PricingCardMobileProps = {
  albums: AlbumCartType[];
  removeAlbum: (id: number) => void;
};

export default function PricingCardMobile({
  albums,
  removeAlbum,
}: PricingCardMobileProps) {
  const [open, setOpen] = useState(false);
  const setId = useArticle.use.setId();

  function handleOpen() {
    setOpen(!open);
  }

  async function handleStripe(e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    const response = await axios({
      method: "post",
      url: `${SERVER_HOST}/create-checkout-session`,
      data: { playlist: albums },
      timeout: 30000,
    });

    const { id, url } = response.data;
    if (id && url) {
      setId(id);
      window.location = url;
    }
  }

  return (
    <div className="space-y-3 mx-auto py-3 max-w-[650px]">
      <div
        className={
          "flex items-center overflow-hidden transition-all duration-300"
        }
        style={{
          height: open ? 120 : 0,
        }}
      >
        <div className="space-y-0.5">
          <h2 className="px-2 sm:px-8 font-semibold text-neutral-600 text-sm uppercase">
            {albums.length} article{albums.length > 1 && "s"}
          </h2>
          <SlideCartList albums={albums} removeAlbum={removeAlbum} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 px-2 sm:px-8 pb-2">
        <div className="-space-y-1">
          <h2 className="font-semibold text-neutral-600 text-lg uppercase">
            TOTAL
          </h2>
          <p className="font-semibold text-neutral-800 text-sm">
            {getPrices(albums)} FCFA
          </p>
        </div>
        <button onClick={handleOpen} className="cursor-pointer">
          {open ? (
            <span className="flex justify-center items-center w-5 h-5 rotate-180">
              <UpIcon className="fill-neutral-700" />
            </span>
          ) : (
            <span className="flex justify-center items-center w-5 h-5">
              <UpIcon className="fill-neutral-700" />
            </span>
          )}
        </button>
      </div>
      <div className="gap-x-2 gap-y-2 sm:gap-x-3 grid grid-cols-1 xss:grid-cols-[1.8fr_1fr_1fr] px-2 sm:px-8">
        <Button type="stripe" onClick={handleStripe} />
        {/* <Button type="mtn" />
        <Button type="airtel" /> */}
      </div>
    </div>
  );
}

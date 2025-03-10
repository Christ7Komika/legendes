import { useEffect, useLayoutEffect, useState } from "react";
import { UpIcon } from "../icons/Icons";
import Button from "../ui/Button";
import SlideCartList from "./SlideCartList";
import { AlbumCartType } from "../../types/album";
import { getPrices, getQuantities } from "../../lib/utils";
import useCheckoutLink from "../../hooks/useCheckoutLink";

type PricingCardMobileProps = {
  albums: AlbumCartType[];
  removeAlbum: (id: number) => void;
  setHeight: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PricingCardMobile({
  albums,
  removeAlbum,
  setHeight,
}: PricingCardMobileProps) {
  const [open, setOpen] = useState(false);
  const checkoutLink = useCheckoutLink();

  useLayoutEffect(() => {
    setHeight(open);
  }, []);

  useEffect(() => {
    setHeight(open);
  }, [open]);

  function handleOpen() {
    setOpen(!open);
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
            {getQuantities(albums)} articles
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
        <a href={checkoutLink}>
          <Button type="stripe" />
        </a>
        <Button type="mtn" />
        <Button type="airtel" />
      </div>
    </div>
  );
}

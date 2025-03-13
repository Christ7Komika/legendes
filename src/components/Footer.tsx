import clsx from "clsx";
import { useLocation } from "react-router";
import PricingCardMobile from "./cart/PricingCardMobile";
import useAlbums from "../stores/albums";

type FooterProps = {
  footerRef?: React.RefObject<HTMLDivElement | null>;
};

export default function Footer({ footerRef }: FooterProps) {
  const { pathname } = useLocation();
  const albums = useAlbums.use.albums();
  const removeAlbum = useAlbums.use.removeAlbum();

  return (
    <>
      {pathname === "/panier" && (
        <div className="md:hidden block bottom-0 left-0 sticky bg-white/70 backdrop-blur-xl rounded-t-xl w-full overflow-y-hidden transition-all duration-200 ease-in-out">
          <PricingCardMobile albums={albums} removeAlbum={removeAlbum} />
        </div>
      )}
      <footer
        ref={footerRef}
        className={clsx(
          "bg-black px-2 sm:px-8 text-sm",
          pathname === "/" && "pt-2"
        )}
      >
        <div
          className={clsx(
            "flex sm:flex-row flex-col justify-start sm:justify-between gap-x-2 mx-auto max-w-[1350px] text-white",
            pathname === "/" && "h-[150px] items-center sm:items-start pt-2",
            pathname !== "/" && "h-fit items-center py-2"
          )}
        >
          <p className="text-center">
            Copyright © 2025 BOYOKA All rights reserved
          </p>
          <p>Licensed to BOYOKA</p>
        </div>
      </footer>
    </>
  );
}

import { NavLink, useLocation } from "react-router";
import { MenuIcon, ShoppingCartIcon, YoutubeIcon, XIcon } from "./icons/Icons";
import Logo from "../../public/assets/logo.png";
import useScroll from "../hooks/useScroll";
import clsx from "clsx";
import { useWidth } from "../hooks/useWidth";
import { useEffect, useState } from "react";
import useAlbums from "../stores/albums";
import { NAVBAR_SCROLL_CHANGE } from "../lib/constant";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const scroll = useScroll();
  const width = useWidth();
  const albums = useAlbums.use.albums();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav
      className={clsx(
        "top-0 left-0 z-40 fixed flex justify-between items-center px-8 md:px-16 w-dvw transition-all duration-500",
        scroll >= NAVBAR_SCROLL_CHANGE && "bg-white",
        width <= 768 && "bg-white"
      )}
      style={{
        height: scroll >= NAVBAR_SCROLL_CHANGE || width <= 768 ? 80 : 160,
      }}
    >
      <a href="/">
        <img src={Logo} alt="Logo Legendes" className="h-10 object-cover" />
      </a>
      <ul
        className={clsx(
          "hidden md:flex items-center gap-x-8 font-bold",
          pathname === "/" && scroll >= NAVBAR_SCROLL_CHANGE && "text-black",
          pathname === "/" && scroll < NAVBAR_SCROLL_CHANGE && "text-white",
          pathname !== "/" && "text-black"
        )}
      >
        <li>
          <NavLink to="/#album-section">ALBUM</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/boutique">BOUTIQUE</NavLink>
        </li>
      </ul>
      <ul className="hidden md:flex items-center gap-x-6">
        <li>
          <a href="https://www.youtube.com/@albumlegendes" target="_blank">
            <span className="flex justify-center items-center h-6">
              <YoutubeIcon
                className={clsx(
                  pathname === "/" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "fill-black",
                  pathname === "/" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "fill-white",
                  pathname !== "/" && "fill-black"
                )}
              />
            </span>
          </a>
        </li>
        <li>
          {albums.length > 0 ? (
            <NavLink
              to="/panier"
              className="relative flex justify-center items-center w-6 h-6"
            >
              <span
                className={clsx(
                  "-top-1.5 -right-1 absolute flex justify-center items-center border-2 rounded-full w-4 h-4 text-[8px]",
                  pathname === "/" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "border-white bg-black text-white",
                  pathname === "/" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "border-black bg-white text-black",
                  pathname !== "/" &&
                    "fill-black" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "border-white bg-black text-white",
                  pathname !== "/" &&
                    "fill-black" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "bg-black text-white border-[#eee]"
                )}
              >
                {albums.length >= 9 ? "+" : albums.length}
              </span>
              <ShoppingCartIcon
                className={clsx(
                  pathname === "/" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "fill-black",
                  pathname === "/" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "fill-white",
                  pathname !== "/" && "fill-black"
                )}
              />
            </NavLink>
          ) : (
            <span className="relative flex justify-center items-center w-6 h-6">
              <span
                className={clsx(
                  "-top-1.5 -right-1 absolute flex justify-center items-center border-2 rounded-full w-4 h-4 text-[8px]",
                  pathname === "/" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "border-white bg-black text-white",
                  pathname === "/" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "border-black bg-white text-black",
                  pathname !== "/" &&
                    "fill-black" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "border-white bg-black text-white",
                  pathname !== "/" &&
                    "fill-black" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "bg-black text-white border-[#eee]"
                )}
              >
                {albums.length >= 9 ? "+" : albums.length}
              </span>
              <ShoppingCartIcon
                className={clsx(
                  pathname === "/" &&
                    scroll >= NAVBAR_SCROLL_CHANGE &&
                    "fill-black",
                  pathname === "/" &&
                    scroll < NAVBAR_SCROLL_CHANGE &&
                    "fill-white",
                  pathname !== "/" && "fill-black"
                )}
              />
            </span>
          )}
        </li>
      </ul>
      <div
        onClick={handleOpen}
        className="md:hidden flex justify-center items-center cursor-pointer"
      >
        <span className="block w-6 h-6">{open ? <XIcon /> : <MenuIcon />}</span>
      </div>
      <ul
        className="top-[80px] left-0 absolute flex flex-col bg-white w-full overflow-y-hidden transition-all duration-300 ease-in-out"
        style={{
          height: open ? 164 : 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            className="flex justify-center items-center py-2 border-zinc-200 border-t w-full"
          >
            ALBUM
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="flex justify-center items-center py-2 border-zinc-200 border-t w-full"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/boutique"
            className="flex justify-center items-center py-2 border-zinc-200 border-t w-full"
          >
            BOUTIQUE
          </NavLink>
        </li>
        <li className="flex justify-center items-center gap-x-6 py-2 border-zinc-200 border-t w-full h-[41px]">
          {albums.length > 0 ? (
            <NavLink to="/panier">
              <span className="flex justify-center items-center w-4 h-4">
                <ShoppingCartIcon color="#000" />
              </span>
            </NavLink>
          ) : (
            <span className="flex justify-center items-center w-4 h-4">
              <ShoppingCartIcon color="#000" />
            </span>
          )}
          <a href="https://www.youtube.com/@albumlegendes" target="_blank">
            <span className="flex justify-center items-center w-4 h-4">
              <YoutubeIcon color="#000" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

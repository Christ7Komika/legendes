import { NavLink } from "react-router";
import {
  FacebookIcon,
  MenuIcon,
  ShoppingCartIcon,
  SoundCloudIcon,
  XIcon,
} from "./icons/Icons";
import Logo from "../../public/assets/logo.png";
import useScroll from "../hooks/useScroll";
import clsx from "clsx";
import { useWidth } from "../hooks/useWidth";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scroll = useScroll();
  const width = useWidth();

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav
      className={clsx(
        "top-0 left-0 z-20 fixed flex justify-between items-center px-8 md:px-16 w-dvw transition-all duration-500",
        scroll >= 200 && "bg-white",
        width <= 768 && "bg-white"
      )}
      style={{
        height: scroll >= 200 || width <= 768 ? 80 : 160,
      }}
    >
      <a href="/">
        <img src={Logo} alt="Logo Legendes" className="h-10 object-cover" />
      </a>
      <ul
        className={clsx(
          "hidden md:flex items-center gap-x-4 font-bold",
          scroll >= 200 ? "text-black" : "text-white"
        )}
      >
        <li>
          <NavLink to="/">ALBUM</NavLink>
        </li>
        <li>
          <NavLink to="/">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/">BUY</NavLink>
        </li>
      </ul>
      <ul className="hidden md:flex items-center gap-x-6">
        <li>
          <NavLink to="/">
            <span className="flex justify-center items-center w-6 h-6">
              <FacebookIcon color={scroll >= 200 ? "#000" : "#fff"} />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span className="flex justify-center items-center h-6">
              <SoundCloudIcon color={scroll >= 200 ? "#000" : "#fff"} />
            </span>
          </NavLink>
        </li>
        <li>
          <span className="flex justify-center items-center w-6 h-6">
            <ShoppingCartIcon color={scroll >= 200 ? "#000" : "#fff"} />
          </span>
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
            to="/"
            className="flex justify-center items-center py-2 border-zinc-200 border-t w-full"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="flex justify-center items-center py-2 border-zinc-200 border-t w-full"
          >
            BUY
          </NavLink>
        </li>
        <li className="flex justify-center items-center gap-x-6 py-2 border-zinc-200 border-t w-full h-[41px]">
          <NavLink to="/">
            <span className="flex justify-center items-center w-4 h-4">
              <ShoppingCartIcon color="#000" />
            </span>
          </NavLink>
          <NavLink to="/">
            <span className="flex justify-center items-center w-4 h-4">
              <SoundCloudIcon color="#000" />
            </span>
          </NavLink>
          <NavLink to="/">
            <span className="flex justify-center items-center w-4 h-4">
              <FacebookIcon color="#000" />
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

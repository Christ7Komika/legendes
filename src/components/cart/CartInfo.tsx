// import React from "react";
import { AlbumCartType } from "../../types/album";

type CartInfoProps = {
  album: AlbumCartType;
  editQuantity: (id: number, quantity: number) => void;
};

export default function CartInfo({ album }: CartInfoProps) {
  // function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   const value = Number(e.target.value);
  //   if (isNaN(value)) return;
  //   editQuantity(album.id, value === 0 ? 1 : value);
  // }

  return (
    <div className="bg-white pb-4 rounded-lg overflow-hidden">
      <div className="w-full">
        <img src={album.cover} alt={album.title} className="w-full h-full" />
      </div>
      <div className="px-3 pt-3">
        <h2 className="font-semibold text-lg">{album.title}</h2>
        <p className="text-neutral-500 text-sm">{album.price}</p>
        {/* <div className="flex items-center space-x-2 mt-1">
          <label htmlFor="quantity" className="text-neutral-500">
            Quantité
          </label>
          <input
            type="number"
            id="quantity"
            min={0}
            defaultValue={album.quantity}
            onChange={handleQuantity}
            className="bg-neutral-100 p-2 rounded-md focus-visible:outline-1 focus-visible:outline-neutral-400 w-fit h-7 text-neutral-600 text-sm"
          />
        </div> */}
      </div>
    </div>
  );
}

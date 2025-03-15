import axios from "axios";
import { SERVER_HOST } from "../../lib/constant";
import { getPrices } from "../../lib/utils";
import useArticle from "../../stores/article";
import { AlbumCartType } from "../../types/album";
import Button from "../ui/Button";
import CardCart from "./CardCart";
import { useState } from "react";

type PricingCardProps = {
  albums: AlbumCartType[];
  removeAlbum: (id: number) => void;
};

export default function PricingCard({ albums, removeAlbum }: PricingCardProps) {
  const setId = useArticle.use.setId();
  const [isPending, setIsPending] = useState(false);

  async function handleStripe(e: React.SyntheticEvent) {
    setIsPending(true);
    e.preventDefault();
    e.stopPropagation();

    const response = await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${SERVER_HOST}/create-checkout-session`,
      data: { playlist: albums },
      timeout: 30000,
    });

    if (response.status !== 200) {
      setIsPending(false);
    }

    const { id, url } = response.data;
    if (id && url) {
      setId(id);
      window.location = url;
    }
    setIsPending(false);
  }

  return (
    <div className="top-[140px] left-0 sticky space-y-2 p-3 border-2 border-neutral-300 border-dashed rounded-xl w-full">
      <div className="space-y-2 max-h-[230px] overflow-y-auto">
        {albums.map((album) => (
          <CardCart key={album.id} album={album} removeAlbum={removeAlbum} />
        ))}
      </div>
      <div className="bg-white p-3 rounded-lg w-full">
        <h2 className="font-semibold text-neutral-500 text-lg uppercase">
          Total
        </h2>
        <p className="flex gap-x-2 text-neutral-400">
          <span className="flex w-28">Article Total </span>{" "}
          <span className="font-semibold text-neutral-600">
            {albums.length}
          </span>
        </p>
        <p className="flex gap-x-2 text-neutral-400">
          <span className="flex w-28">Prix Total</span>{" "}
          <span className="font-semibold text-neutral-600">
            {getPrices(albums)} FCFA
          </span>
        </p>
      </div>
      <div className="space-y-1">
        <p className="pt-3 text-neutral-500 text-sm text-center">
          Sélectionner le type de payement
        </p>

        <div className="gap-y-2 grid grid-cols-1 pt-2">
          <Button type="stripe" onClick={handleStripe} isPending={isPending} />
        </div>
      </div>
    </div>
  );
}

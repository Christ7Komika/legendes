import Stream from "../../public/assets/stream.webp";
import PaymentButton from "./ui/PaymentButton";

export default function Hero() {
  return (
    <div className="relative">
      <div className="top-1/2 left-1/2 absolute flex justify-center items-center p-2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-full max-w-[400px] h-[450px] pointer-events-none">
          <img
            src={Stream}
            className="w-full h-full object-center object-cover pointer-events-none"
          />
        </div>
      </div>
      <div className="bg-zinc-100 h-[510px]">
        <div className="flex flex-col justify-center space-y-4 mx-auto px-2 pt-20 max-w-[750px]">
          <h2 className="mx-auto font-bold text-3xl md:text-5xl text-center uppercase tracking-widest">
            Album Légendes
          </h2>
          <span className="block bg-black mx-auto mt-4 w-[60px] h-[1px]"></span>
          <div className="space-y-1">
            <h3 className="font-bold text-lg md:text-2xl text-center uppercase">
              Teddy Benzo & Mixton
            </h3>
            <p className="text-center">Acheter maintenant</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#131112] h-[510px]">
        <div className="space-y-6 pt-20">
          <h2 className="font-light text-neutral-100 text-lg text-center uppercase">
            Acheter l'album complet à 5000 FCFA
          </h2>
          <PaymentButton />
        </div>
      </div>
    </div>
  );
}

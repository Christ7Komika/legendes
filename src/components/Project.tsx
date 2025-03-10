import Logo from "../../public/assets/big-logo.webp";
import Album from "../../public/assets/project.webp";

export default function Project() {
  return (
    <div className="bg-[#131112] px-2 pt-[170px] pb-15 text-white">
      <div className="space-y-12 mb-8">
        <h2 className="mx-auto font-bold text-4xl md:text-5xl text-center tracking-widest">
          LE PROJET LEGENDES
        </h2>
        <span className="block bg-white mx-auto mt-4 w-[60px] h-[2px]"></span>
      </div>

      <div className="space-y-2 mx-auto mb-12 max-w-[750px]">
        <p className="text-justify">
          Teddy Benzo et Mixton, figures emblématiques du rap congolais,
          continuent de s’affirmer sur la scène musicale africaine avec leur
          projet collaboratif intitulé “Légendes”. Annoncé depuis plusieurs
          mois, cet album est très attendu par les fans. En juin 2024, Mixton a
          annoncé que l’album était achevé à 85 %, avec notamment une
          collaboration avec l’artiste gabonais RodZeng.
        </p>
        <p className="text-justify">
          Le premier extrait de cet album, intitulé “Nani a kossi Yo”, a été
          publié récemment, offrant un aperçu prometteur du projet.
        </p>
        <p className="text-justify">
          Un autre titre, “Les vieux là nous bloquent (L.V.NB)”, est sorti en
          2024, abordant les défis rencontrés par les artistes dans l’industrie
          musicale congolaise.
        </p>
        <p className="text-justify">
          Bien que la date de sortie officielle de l’album “Légendes” n’ait pas
          encore été annoncée, les fans attendent avec impatience cette
          collaboration qui promet de marquer l’histoire du rap congolais.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1450px]">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-full object-center object-contain"
        />
      </div>
      <div className="mx-auto w-full max-w-[1150px]">
        <img
          src={Album}
          alt="Album"
          className="mx-auto w-full object-center object-contain"
        />
      </div>
    </div>
  );
}

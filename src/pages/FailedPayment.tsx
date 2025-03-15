import { WrongPaymentIcon } from "../components/icons/Icons";

export default function FailedPayment() {
  return (
    <>
      <title>LEGENDES | Payement annulé</title>
      <div className="flex justify-center items-center w-dvw h-dvh">
        <div className="space-y-3 bg-white mx-auto p-12 rounded-xl w-full max-w-[850px]">
          <span className="block mx-auto w-[100px]">
            <WrongPaymentIcon
              className="stroke-neutral-500"
              color="#2C2C2CFF"
            />
          </span>
          <div className="space-y-1 mx-auto max-w-md">
            <h2 className="font-semibold text-neutral-600 text-xl text-center">
              Paiement échoué
            </h2>
            <p className="text-neutral-500 text-sm text-center">
              Nous sommes désolés, mais votre paiement n’a pas pu être effectué.
              Veuillez réessayer ou contacter notre support si le problème
              persiste.
            </p>
          </div>
          <a
            href="/"
            className="block bg-black mx-auto px-4 py-1 rounded-lg w-fit text-white text-sm text-center"
          >
            Retourner à l'accueil
          </a>
        </div>
      </div>
    </>
  );
}

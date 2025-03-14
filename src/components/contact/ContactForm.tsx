import InfoContactCard from "../card/InfoContactCard";
import Form from "./Form";

export default function ContactForm() {
  return (
    <div className="px-2 sm:px-6 md:px-2 lg:px-8 py-[40px] sm:py-[70px] min-h-dvh">
      <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-[1.5fr_1fr] mx-auto w-full max-w-[950px]">
        <Form />
        <div className="flex flex-col justify-end space-y-4">
          <div className="space-y-0.5">
            <h2 className="font-bold text-neutral-800 text-xl md:text-left text-center uppercase">
              Discutons ensemble !
            </h2>
            <p className="text-neutral-600 md:text-left text-center">
              Que ce soit pour un projet, une collaboration ou juste une
              question, nous sommes à votre écoute. Écrivez-nous !
            </p>
          </div>
          <InfoContactCard />
          <InfoContactCard />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Label from "../ui/Label";
import clsx from "clsx";
import { isValidEmail } from "../../lib/utils";
import { FormType } from "../../types/form";
import { SERVER_HOST } from "../../lib/constant";
import axios from "axios";
import { LoaderIcon } from "../icons/Icons";
import ErrorCard from "../card/ErrorCard";

export default function Form() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState({ success: false, error: false });
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    object: "",
    message: "",
  });

  const [error, setError] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    object: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🟢 UseEffect pour retirer les erreurs en temps réel, mais seulement après soumission
  useEffect(() => {
    if (!isSubmitted) return; // Ne faire la vérification que si le formulaire a été soumis

    // Création d'un nouvel objet d'erreurs au lieu de modifier directement l'existant
    let updatedErrors = { ...error };

    // Assigner une chaîne vide aux champs valides au lieu de les supprimer
    if (form?.name && error?.name) updatedErrors.name = "";
    if (form?.email && isValidEmail(form?.email) && error?.email)
      updatedErrors.email = "";
    if (form?.phone && error?.phone) updatedErrors.phone = "";
    if (form?.object && error?.object) updatedErrors.object = "";
    if (form?.message && error?.message) updatedErrors.message = "";

    // Seulement mettre à jour l'état si quelque chose a changé
    if (JSON.stringify(updatedErrors) !== JSON.stringify(error)) {
      setError(updatedErrors);
    }
  }, [form, isSubmitted, error]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true); // Indique que le formulaire a été soumis

    let newErrors: FormType = {
      name: "",
      email: "",
      phone: "",
      object: "",
      message: "",
    };

    if (!form?.name) {
      newErrors.name = "Veuillez entrer votre nom.";
    }

    if (!form?.email || (form?.email && !isValidEmail(form?.email))) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!form?.phone) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!form?.object) {
      newErrors.object = "Veuillez préciser l'objet de votre message.";
    }

    if (!form?.message) {
      newErrors.message = "Veuillez écrire votre message avant de l'envoyer.";
    }

    setError(newErrors);

    const isValid = Object.keys(newErrors).every(
      (key) => !newErrors[key as keyof FormType]
    );
    if (isValid) {
      setIsPending(true);
      const response = await axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: `${SERVER_HOST}/send-email`,
        data: { form },
        timeout: 30000,
      });

      const { state } = response.data;
      if (state === "success") {
        setMessage({ success: true, error: false });
      } else {
        setMessage({ success: false, error: true });
      }
      setIsPending(false);
    }
  }

  console.log({ message });

  return (
    <form onSubmit={submit} className="space-y-3 w-full">
      <Label id="name" title="Nom" error={error?.name}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Entrer votre nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={clsx(
            "p-3 border-2 w-full h-11",
            error?.name ? "border-red-600" : "border-neutral-700"
          )}
        />
      </Label>

      <div className="space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 w-full">
        <Label id="email" title="Email" error={error?.email}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrer votre adresse mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={clsx(
              "p-3 border-2 w-full h-11",
              error?.email ? "border-red-600" : "border-neutral-700"
            )}
          />
        </Label>

        <Label id="phone" title="Téléphone" error={error?.phone}>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Entrer votre numéro de téléphone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={clsx(
              "p-3 border-2 w-full h-11",
              error?.phone ? "border-red-600" : "border-neutral-700"
            )}
          />
        </Label>
      </div>

      <Label id="object" title="Objet" error={error?.object}>
        <input
          type="text"
          id="object"
          name="object"
          placeholder="Entrer l'objet de votre message"
          value={form.object}
          onChange={(e) => setForm({ ...form, object: e.target.value })}
          className={clsx(
            "p-3 border-2 w-full h-11",
            error?.object ? "border-red-600" : "border-neutral-700"
          )}
        />
      </Label>

      <Label id="message" title="Message" error={error?.message}>
        <textarea
          id="message"
          name="message"
          placeholder="Entrer votre message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={clsx(
            "p-3 border-2 w-full h-11 min-h-32",
            error?.message ? "border-red-600" : "border-neutral-700"
          )}
        ></textarea>
      </Label>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="flex justify-center items-center bg-neutral-800 px-4 py-2 rounded-md w-full h-12 text-white cursor-pointer"
        >
          {isPending ? (
            <span className="flex justify-center items-center w-5 h-5 animate-spin ease-in-out">
              <LoaderIcon color="#fff" />
            </span>
          ) : (
            "Envoyer"
          )}
        </button>
        {message.error && <ErrorCard type="error" setMessage={setMessage} />}
        {message.success && (
          <ErrorCard type="success" setMessage={setMessage} />
        )}
      </div>
    </form>
  );
}

import { useEffect, useRef, useState } from "react";
import { CountryType, MobileMoneyFormType } from "../../types/form";
import Label from "../ui/Label";
import { ChevronDown, FlagIcon, MailIcon, UserIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import { isValidEmail } from "../../lib/utils";
import axios from "axios";
import { SERVER_HOST } from "../../lib/constant";
import useAlbums from "../../stores/albums";
import ErrorCard from "../card/ErrorCard";
import { countries } from "../../datas/country";
import { LoaderIcon } from "../icons/Icons";

export default function MobileMoneyForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const albums = useAlbums.use.albums();
  const [isPending, setIsPending] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState<{
    success: boolean;
    error: boolean;
    text?: string;
  }>({
    success: false,
    error: false,
    text: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<MobileMoneyFormType>({
    firstname: "",
    lastname: "",
    email: "",
    dialCode: countries[0].code,
    phone: "",
    country: "",
  });
  const [error, setError] = useState<MobileMoneyFormType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    dialCode: "",
  });

  useEffect(() => {
    if (!isSubmitted) return; // Ne faire la vérification que si le formulaire a été soumis

    // Création d'un nouvel objet d'erreurs au lieu de modifier directement l'existant
    let updatedErrors = { ...error };

    // Assigner une chaîne vide aux champs valides au lieu de les supprimer
    if (form?.firstname && error?.firstname) updatedErrors.firstname = "";
    if (form?.lastname && error?.lastname) updatedErrors.lastname = "";
    if (form?.email && isValidEmail(form?.email) && error?.email)
      updatedErrors.email = "";
    if (form?.phone && error?.phone) updatedErrors.phone = "";
    if (form?.country && error?.country) updatedErrors.country = "";

    // Seulement mettre à jour l'état si quelque chose a changé
    if (JSON.stringify(updatedErrors) !== JSON.stringify(error)) {
      setError(updatedErrors);
    }
  }, [form, isSubmitted, error]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true); // Indique que le formulaire a été soumis

    let newErrors: MobileMoneyFormType = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
    };

    if (!form?.firstname) {
      newErrors.firstname = "Veuillez entrer votre prénom.";
    }
    if (!form?.lastname) {
      newErrors.lastname = "Veuillez entrer votre nom.";
    }

    if (!form?.email || (form?.email && !isValidEmail(form?.email))) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!form?.phone) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!form?.country) {
      newErrors.country = "Veuillez préciser votre pays.";
    }

    setError(newErrors);

    const isValid = Object.keys(newErrors).every(
      (key) => !newErrors[key as keyof MobileMoneyFormType]
    );
    if (isValid) {
      setIsPending(true);
      const phoneNumber = `${form.phone?.replace(/\s+/g, "")}`;
      const response = await axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: `${SERVER_HOST}/mtn-payment`,
        data: { form: { ...form, phone: phoneNumber }, albums },
        timeout: 30000,
      });

      const { state, reqMessage, url } = response.data;
      if (state === "success") {
        setMessage({ success: true, error: false, text: reqMessage });
        console.log({ url });
        return window.location.replace(url.url);
      } else {
        setMessage({ success: false, error: true, text: reqMessage });
      }
      setIsPending(false);
    }
  }

  return (
    <>
      {show && (
        <div className="top-0 left-0 z-50 fixed flex justify-center items-center bg-black/40 backdrop-blur-lg w-dvw h-dvh">
          <div className="bg-white p-4 rounded-md w-full max-w-sm">
            <div className="flex justify-between items-center gap-x-2">
              <h2 className="text-neutral-700">Confirmer le payement</h2>
              <span
                onClick={() => setShow(false)}
                className="text-neutral-600 cursor-pointer"
              >
                <XIcon size={15} />{" "}
              </span>
            </div>
            <div>// email // phone // total article // price</div>
          </div>
        </div>
      )}
      <form onSubmit={submit} className="space-y-2 w-full max-w-[340px]">
        <Label
          title="Nom"
          id="lastname"
          error={error.lastname}
          className="text-sm"
        >
          <div className="relative">
            <input
              type="text"
              id="lastname"
              placeholder="Entrer votre nom complet"
              value={form.lastname}
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
              className={clsx(
                "p-3 pl-9 border rounded-md focus-visible:outline-[3px] focus-visible:outline-blue-200 w-full h-10 placeholder:text-neutral-500 text-sm",
                error?.lastname
                  ? "border-red-600 focus-within:border-red-600"
                  : "border-gray-300 focus-within:border-blue-400"
              )}
            />
            <span className="top-1/2 left-3 absolute text-neutral-500 -translate-y-1/2">
              <UserIcon size={15} />
            </span>
          </div>
        </Label>
        <Label
          title="Prénom"
          id="firstname"
          error={error.firstname}
          className="text-sm"
        >
          <div className="relative">
            <input
              type="text"
              id="firstname"
              placeholder="Entrer votre nom complet"
              value={form.firstname}
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
              className={clsx(
                "p-3 pl-9 border rounded-md focus-visible:outline-[3px] focus-visible:outline-blue-200 w-full h-10 placeholder:text-neutral-500 text-sm",
                error?.firstname
                  ? "border-red-600 focus-within:border-red-600"
                  : "border-gray-300 focus-within:border-blue-400"
              )}
            />
            <span className="top-1/2 left-3 absolute text-neutral-500 -translate-y-1/2">
              <UserIcon size={15} />
            </span>
          </div>
        </Label>

        <Label
          title="Adresse mail"
          id="email"
          error={error.email}
          className="text-sm"
        >
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Entrer votre adresse mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={clsx(
                "p-3 pl-9 border rounded-md focus-visible:outline-[3px] focus-visible:outline-blue-200 w-full h-10 placeholder:text-neutral-500 text-sm",
                error?.email
                  ? "border-red-600 focus-within:border-red-600"
                  : "border-gray-300 focus-within:border-blue-400"
              )}
            />
            <span className="top-1/2 left-3 absolute text-neutral-500 -translate-y-1/2">
              <MailIcon size={15} />
            </span>
          </div>
        </Label>
        <Label
          title="Numéro de téphoner"
          id="phone"
          error={error.phone}
          className="text-sm"
        >
          <div
            ref={containerRef}
            tabIndex={0}
            className={clsx(
              "flex items-center border rounded-md focus-within:outline-[3px] focus-within:outline-blue-200 w-full h-10 transition-all",
              isFocused &&
                error.phone &&
                "border-red-600 focus-within:border-red-600",
              isFocused &&
                !error.phone &&
                "border-gray-300 focus-within:border-blue-400",
              !isFocused && error.phone && "border-red-600",
              !isFocused && !error.phone && "border-gray-300"
            )}
          >
            {/* Country Select */}
            <div className="relative flex items-center pl-2">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.iso}
                className="mr-1 w-5 h-5"
              />
              <select
                className="outline-none w-[70px] text-sm appearance-none"
                value={selectedCountry.code}
                onChange={(e) => {
                  const country = countries.find(
                    (c) => c.code === e.target.value
                  );
                  setSelectedCountry(country as CountryType);
                  setForm({ ...form, dialCode: country?.code as string });
                }}
              >
                {countries.map((c) => (
                  <option key={c.iso} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
              <span className="top-1/2 right-0 absolute text-neutral-700 -translate-y-1/2">
                <ChevronDown size={14} />
              </span>
            </div>

            {/* Phone number input */}
            <input
              type="tel"
              placeholder="Entrer votre numéro de téléphone"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="p-3 pl-1 focus-visible:outline-none w-full h-full placeholder:text-neutral-500 text-sm"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </Label>
        <Label
          title="Pays"
          id="country"
          error={error.country}
          className="text-sm"
        >
          <div className="relative">
            <select
              name="country"
              id="country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className={clsx(
                "px-9 border rounded-md focus-visible:outline-[3px] focus-visible:outline-blue-200 w-full h-10 placeholder:text-neutral-500 text-sm appearance-none",
                error?.country
                  ? "border-red-600 focus-within:border-red-600"
                  : "border-gray-300 focus-within:border-blue-400",
                form.country ? "text-black" : "text-neutral-500"
              )}
            >
              <option value="" className="text-black">
                Sélectionner votre pays
              </option>
              {countries.map((country) => (
                <option value={country.iso} className="text-black">
                  {country.country}
                </option>
              ))}
            </select>
            <span className="top-1/2 left-2 absolute flex justify-center items-center w-6 h-6 text-neutral-500 -translate-y-1/2">
              {form.country ? (
                <>
                  <img
                    src={countries.find((v) => v.iso === form.country)?.flag}
                    alt={form.country}
                    className="w-full h-full object-center object-contain"
                  />
                </>
              ) : (
                <FlagIcon size={15} />
              )}
            </span>
            <span className="top-1/2 right-3 absolute text-neutral-500 -translate-y-1/2">
              <ChevronDown size={15} />
            </span>
          </div>
        </Label>
        <div className="pt-4">
          <button
            type="submit"
            disabled={isPending}
            className="flex justify-center items-center bg-blue-600 shadow shadow-neutral-300/30 rounded-md w-full h-12 text-white cursor-pointer"
          >
            {isPending ? (
              <span className="flex justify-center items-center w-5 h-5 animate-spin ease-in-out">
                <LoaderIcon color="#fff" />
              </span>
            ) : (
              "Payer"
            )}
          </button>
          {message.error && (
            <ErrorCard
              type="error"
              setMessage={setMessage}
              message={message.text}
            />
          )}
          {message.success && (
            <ErrorCard
              type="success"
              setMessage={setMessage}
              message={message.text}
            />
          )}
        </div>
      </form>
    </>
  );
}

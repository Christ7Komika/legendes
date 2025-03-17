export type FormType = {
    name?: string;
    email?: string;
    phone?: string;
    object?: string;
    message?: string;
    dialCode?: string;
}

export type MobileMoneyFormType = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    dialCode?: string;
    country?: string;
}

export type CountryType = {
    id: number;
    country: string;
    code: string;
    iso: string;
    flag: string;
}
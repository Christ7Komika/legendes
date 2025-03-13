import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from './constant';

export const stripe = loadStripe(STRIPE_PUBLIC_KEY, {
    locale: "fr-FR"
});

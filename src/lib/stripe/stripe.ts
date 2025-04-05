import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
	? new Stripe(stripeSecretKey, {
			// @ts-ignore
			apiVersion: "2023-10-16; embedded_connect_beta=v2",
		})
	: null;

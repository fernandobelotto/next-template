import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
	NEXT_PUBLIC_SUPABASE_URL: str(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: str(),
	STRIPE_SECRET_KEY: str({ default: "" }),
	NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: str({ default: "" }),
	VAPID_PUBLIC_KEY: str({ default: "" }),
	VAPID_PRIVATE_KEY: str({ default: "" }),
});

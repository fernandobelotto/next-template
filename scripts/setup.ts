import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const envExamplePath = join(process.cwd(), ".env.example");
const envLocalPath = join(process.cwd(), ".env.local");

function setupEnvironment() {
	if (!existsSync(envExamplePath)) {
		console.error("❌ .env.example file not found!");
		process.exit(1);
	}

	if (existsSync(envLocalPath)) {
		console.log("ℹ️  .env.local file already exists. Skipping...");
		return;
	}

	try {
		copyFileSync(envExamplePath, envLocalPath);
		console.log("✅ Created .env.local file from .env.example");
		console.log(
			"\n📝 Please update the following environment variables in .env.local:",
		);
		console.log("- NEXT_PUBLIC_SUPABASE_URL");
		console.log("- NEXT_PUBLIC_SUPABASE_ANON_KEY");
		console.log("- STRIPE_SECRET_KEY");
		console.log("- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
		console.log("\nOptional:");
		console.log("- VAPID_PUBLIC_KEY");
		console.log("- VAPID_PRIVATE_KEY");
	} catch (error) {
		console.error("❌ Failed to create .env.local file:", error);
		process.exit(1);
	}
}

setupEnvironment();

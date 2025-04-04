"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthStatus() {
	const [user, setUser] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		// Get initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setUser(session?.user ?? null);
		});

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});

		return () => subscription.unsubscribe();
	}, []);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.push("/login");
	};

	if (!user) {
		return (
			<div className="flex items-center space-x-4">
				<span className="text-gray-600">Not logged in</span>
				<a
					href="/login"
					className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
				>
					Log in
				</a>
			</div>
		);
	}

	return (
		<div className="flex items-center space-x-4">
			<span className="text-gray-600">Logged in as {user.email}</span>
			<button
				onClick={handleSignOut}
				className="rounded-md bg-gray-600 px-3 py-1 text-sm text-white hover:bg-gray-700"
			>
				Sign out
			</button>
		</div>
	);
}

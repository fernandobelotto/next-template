"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const handleToggle = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="absolute top-0 right-0 mt-2 mr-2">
			<Button
				variant="outline"
				size="icon"
				onClick={handleToggle}
				aria-label="Toggle theme"
				className="h-[30px] w-[30px] border-none"
			>
				<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		</div>
	);
}

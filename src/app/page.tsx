"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	cellphone: z
		.string()
		.min(10, "Phone number must be at least 10 digits")
		.max(15, "Phone number must be at most 15 digits")
		.regex(/^[0-9+\-() ]+$/, "Please enter a valid phone number"),
	dateOfBirth: z.string().refine((date) => {
		const parsedDate = new Date(date);
		const today = new Date();
		const minDate = new Date();
		minDate.setFullYear(today.getFullYear() - 120); // Max age 120 years
		const maxDate = new Date();
		maxDate.setFullYear(today.getFullYear() - 18); // Min age 18 years
		return parsedDate >= minDate && parsedDate <= maxDate;
	}, "You must be between 18 and 120 years old"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
	const [success, setSuccess] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			// Here you would typically send the form data to your backend
			// For now, we'll just simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setSuccess("Thank you for your information! We will process it shortly.");
			reset();
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
			<div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/20">
				<h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
					Personal Information
				</h2>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
					{success && (
						<div className="rounded-md bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
							{success}
						</div>
					)}
					<div className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Full Name
							</label>
							<input
								id="name"
								type="text"
								className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
								aria-label="Your full name"
								{...register("name")}
							/>
							{errors.name && (
								<p className="mt-1 text-sm text-red-600 dark:text-red-400">
									{errors.name.message}
								</p>
							)}
						</div>
						<div>
							<label
								htmlFor="cellphone"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Cellphone Number
							</label>
							<Input
								id="cellphone"
								type="tel"
								aria-label="Your cellphone number"
								placeholder="+1 (555) 555-5555"
								className="bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
								{...register("cellphone")}
							/>
							{errors.cellphone && (
								<p className="mt-1 text-sm text-red-600 dark:text-red-400">
									{errors.cellphone.message}
								</p>
							)}
						</div>
						<div>
							<label
								htmlFor="dateOfBirth"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								Date of Birth
							</label>
							<Input
								id="dateOfBirth"
								type="date"
								aria-label="Your date of birth"
								className="bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
								{...register("dateOfBirth")}
							/>
							{errors.dateOfBirth && (
								<p className="mt-1 text-sm text-red-600 dark:text-red-400">
									{errors.dateOfBirth.message}
								</p>
							)}
						</div>
					</div>
					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? "Submitting..." : "Submit Information"}
					</Button>
				</form>
			</div>
		</div>
	);
}

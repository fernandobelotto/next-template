"use client";

import { useChat } from "@ai-sdk/react";

export default function AITextPage() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({});

	return (
		<div className="container mx-auto px-4 py-8 max-w-2xl">
			<h1 className="text-3xl font-bold mb-6">AI Chat</h1>

			<div className="space-y-4 mb-8">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`p-4 rounded-lg ${
							message.role === "user"
								? "bg-blue-100 ml-auto max-w-[80%]"
								: "bg-gray-100 mr-auto max-w-[80%]"
						}`}
					>
						<div className="font-semibold mb-1">
							{message.role === "user" ? "You" : "AI"}
						</div>
						<div className="whitespace-pre-wrap">
							{message.parts.map((part, i) => {
								switch (part.type) {
									case "text":
										return <div key={`${message.id}-${i}`}>{part.text}</div>;
									default:
										return null;
								}
							})}
						</div>
					</div>
				))}
			</div>

			<form
				onSubmit={handleSubmit}
				className="fixed bottom-0 left-0 right-0 bg-white border-t p-4"
			>
				<div className="container mx-auto max-w-2xl flex gap-2">
					<input
						value={input}
						onChange={handleInputChange}
						placeholder="Type your message..."
						className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

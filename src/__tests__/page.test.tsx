import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../app/page";

test("Page", () => {
	render(<Home />);

	// Check for the main heading
	expect(
		screen.getByRole("heading", { level: 1, name: "Sign Up" }),
	).toBeDefined();

	// Check for form fields
	expect(screen.getByLabelText("Name")).toBeDefined();
	expect(screen.getByLabelText("Email")).toBeDefined();
	expect(screen.getByLabelText("Password")).toBeDefined();

	// Check for the submit button
	expect(screen.getByRole("button", { name: "Submit" })).toBeDefined();
});

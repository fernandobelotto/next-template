import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../app/page";

test("Personal Information Form", () => {
	render(<Home />);

	// Check for the main heading
	expect(
		screen.getByRole("heading", { level: 2, name: "Personal Information" }),
	).toBeDefined();

	// Check for form fields
	expect(screen.getByLabelText("Your full name")).toBeDefined();
	expect(screen.getByLabelText("Your cellphone number")).toBeDefined();
	expect(screen.getByLabelText("Your date of birth")).toBeDefined();

	// Check for the submit button
	expect(
		screen.getByRole("button", { name: "Submit Information" }),
	).toBeDefined();
});

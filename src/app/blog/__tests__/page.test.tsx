import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Blog from "../page";

describe("Blog Page", () => {
	it("should render the blog heading", () => {
		render(<Blog />);

		const heading = screen.getByRole("heading", { name: "Blog" });

		expect(heading).toBeDefined();
	});
});

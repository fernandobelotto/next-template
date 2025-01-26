import { describe, expect, test } from "vitest";
import { GET, POST } from "../app/api/route";

describe("API Endpoints", () => {
	test("GET endpoint returns success status", async () => {
		const response = await GET();
		const data = await response.json();

		expect(response.status).toBe(200);
		expect(data).toEqual({ status: "success" });
	});

	test("POST endpoint returns success message", async () => {
		const response = await POST();
		const data = await response.json();

		expect(response.status).toBe(200);
		expect(data).toEqual({
			status: "success",
			message: "POST method received",
		});
	});
});

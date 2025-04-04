describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("displays the correct heading", () => {
		cy.get("h2").should("have.text", "Personal Information");
	});

	it("displays all form fields", () => {
		cy.get("form").within(() => {
			// Check for form fields
			cy.get("label").contains("Full Name").should("exist");
			cy.get("label").contains("Cellphone Number").should("exist");
			cy.get("label").contains("Date of Birth").should("exist");

			// Check for input fields
			cy.get('input[name="name"]').should("exist");
			cy.get('input[name="cellphone"]').should("exist");
			cy.get('input[name="dateOfBirth"]').should("exist");
		});
	});

	it("validates form submission", () => {
		// Try to submit empty form
		cy.get("button[type='submit']").click();

		// Check for validation messages
		cy.contains("Name must be at least 2 characters").should("exist");
		cy.contains("Phone number must be at least 10 digits").should("exist");
		cy.contains("You must be between 18 and 120 years old").should("exist");

		// Fill in invalid data
		cy.get('input[name="name"]').type("J");
		cy.get('input[name="cellphone"]').type("123");
		cy.get('input[name="dateOfBirth"]').type("2024-01-01");

		// Submit form
		cy.get("button[type='submit']").click();

		// Check for validation messages with invalid data
		cy.contains("Name must be at least 2 characters").should("exist");
		cy.contains("Phone number must be at least 10 digits").should("exist");
		cy.contains("You must be between 18 and 120 years old").should("exist");

		// Fill in valid data
		cy.get('input[name="name"]').clear().type("John Doe");
		cy.get('input[name="cellphone"]').clear().type("+1 (555) 555-5555");

		// Calculate a valid date (18 years ago)
		const today = new Date();
		const validDate = new Date(
			today.getFullYear() - 20,
			today.getMonth(),
			today.getDate(),
		);
		const formattedDate = validDate.toISOString().split("T")[0];
		cy.get('input[name="dateOfBirth"]').clear().type(formattedDate);

		// Submit form
		cy.get("button[type='submit']").click();

		// Check that validation messages are gone
		cy.contains("Name must be at least 2 characters").should("not.exist");
		cy.contains("Phone number must be at least 10 digits").should("not.exist");
		cy.contains("You must be between 18 and 120 years old").should("not.exist");

		// Check for success message
		cy.contains(
			"Thank you for your information! We will process it shortly.",
		).should("exist");
	});

	it("handles loading state correctly", () => {
		// Fill in valid data
		cy.get('input[name="name"]').type("John Doe");
		cy.get('input[name="cellphone"]').type("+1 (555) 555-5555");

		// Calculate a valid date (18 years ago)
		const today = new Date();
		const validDate = new Date(
			today.getFullYear() - 20,
			today.getMonth(),
			today.getDate(),
		);
		const formattedDate = validDate.toISOString().split("T")[0];
		cy.get('input[name="dateOfBirth"]').type(formattedDate);

		// Submit form and check loading state
		cy.get("button[type='submit']").click();
		cy.get("button[type='submit']").should("be.disabled");
		cy.get("button[type='submit']").should("contain", "Submitting...");
	});
});

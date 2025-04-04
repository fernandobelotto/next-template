describe("Home Page Form", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		// Wait for the form to be fully loaded
		cy.get("form").should("be.visible");
	});

	it("should display form validation errors for invalid inputs", () => {
		// Test name validation
		cy.get("#name").type("a");
		cy.contains("button", "Submit Information").click();
		cy.contains("Name must be at least 2 characters").should("be.visible");

		// Test phone validation
		cy.get("#cellphone").clear().type("123");
		cy.contains("button", "Submit Information").click();
		cy.contains("Phone number must be at least 10 digits").should("be.visible");

		// Test date of birth validation
		const today = new Date();
		const invalidDate = new Date(
			today.getFullYear() - 10,
			today.getMonth(),
			today.getDate(),
		)
			.toISOString()
			.split("T")[0];
		cy.get("#dateOfBirth").clear().type(invalidDate);
		cy.contains("button", "Submit Information").click();
		cy.contains("You must be between 18 and 120 years old").should(
			"be.visible",
		);
	});

	it("should successfully submit the form with valid data", () => {
		// Fill in valid form data
		cy.get("#name").clear().type("John Doe");
		cy.get("#cellphone").clear().type("+1 (555) 555-55");

		// Calculate a valid date of birth (25 years ago)
		const today = new Date();
		const validDate = new Date(
			today.getFullYear() - 25,
			today.getMonth(),
			today.getDate(),
		)
			.toISOString()
			.split("T")[0];
		cy.get("#dateOfBirth").clear().type(validDate);

		// Submit the form using the button
		cy.contains("button", "Submit Information").click();

		// Check for success message
		cy.contains(
			"Thank you for your information! We will process it shortly.",
		).should("be.visible");
	});
});

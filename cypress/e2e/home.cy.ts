describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("displays the correct heading", () => {
		cy.get("h1").should("have.text", "Sign Up");
	});

	it("displays all form fields", () => {
		cy.get("form").within(() => {
			// Check for form fields
			cy.get("label").contains("Name").should("exist");
			cy.get("label").contains("Email").should("exist");
			cy.get("label").contains("Password").should("exist");

			// Check for input fields
			cy.get('input[name="name"]').should("exist");
			cy.get('input[name="email"]').should("exist");
			cy.get('input[name="password"]').should("exist");
		});
	});

	it("validates form submission", () => {
		// Try to submit empty form
		cy.get("button[type='submit']").click();

		// Check for validation messages
		cy.contains("Name must be at least 2 characters.").should("exist");
		cy.contains("Please enter a valid email address.").should("exist");
		cy.contains("Password must be at least 8 characters.").should("exist");

		// Fill in valid data
		cy.get('input[name="name"]').type("John Doe");
		cy.get('input[name="email"]').type("john@example.com");
		cy.get('input[name="password"]').type("password123");

		// Submit form
		cy.get("button[type='submit']").click();

		// Check that validation messages are gone
		cy.contains("Name must be at least 2 characters.").should("not.exist");
		cy.contains("Please enter a valid email address.").should("not.exist");
		cy.contains("Password must be at least 8 characters.").should("not.exist");
	});
});

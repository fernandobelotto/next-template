describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("displays the correct heading", () => {
		cy.get("h1").should("have.text", "Home");
	});

	it("displays and interacts with the button", () => {
		cy.get("button").should("have.text", "Click me").click();
	});

	it("has the correct layout structure", () => {
		cy.get("div").within(() => {
			cy.get("h1").should("exist");
			cy.get("button").should("exist");
		});
	});
});

describe("My First Test", () => {
  it("verify login", () => {
    cy.visit("https://app.lifology.com/login");
    cy.title().should("eq", "Login - Lifology");
    cy.get("#phone").type("8590875875");
    cy.get("button[type='submit']").click();
    cy.get("input#one").type("1");
    cy.get("input#two").type("2");
    cy.get("input#three").type("3");
    cy.get("input#four").type("4");
    cy.get("input#five").type("5");
    cy.get("input#six").type("6");
    cy.get("button[type='submit']").click();
  });
});

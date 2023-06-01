describe("Radio buttons", () => {
  it("validate radio buttons", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    // visibility check

    cy.get("input#female").should("be.visible");
    cy.get("input#male").should("be.visible");

    // selecting radio buttons - selecting male radio buttons

    cy.get("input#female").check().should("be.checked");
    cy.get("input#male").should("not.be.checked");

    //selecting radio buttons - selecting female radio buttons
    cy.get("input#male").check().should("be.checked");
    cy.get("input#female").should("not.be.checked");
  });
});

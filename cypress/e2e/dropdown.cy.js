describe("dropdowns", () => {
  it("dropdown testing", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.wait(2000);
    cy.get("[name='CASECF7']").select("Greece");
    cy.wait(1000);
    cy.get("[name='CASECF12']").select("Selling offline");
    cy.wait(1000);
    cy.get("[name='CASECF7']").select("Greece").should("have.value", "Greece");
    cy.wait(1000);
    cy.get("[name='CASECF12']")
      .select("Selling offline")
      .should("have.value", "Selling offline");
  });
});

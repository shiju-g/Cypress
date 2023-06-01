describe("xpath locator", () => {
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
    cy.xpath(
      "//div[@class='items-stretch keen-slider']/div[@class='pt-3 pb-6 keen-slider__slide']"
    ).should("have.length", 15);
  });
});

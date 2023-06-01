describe("gmail account", () => {
  beforeEach("login", () => {
    cy.visit("https://mail.google.com/mail/u/0/#inbox");
    cy.get("input[type='email']").type("shijuallinivad@gmail.com");
    cy.get("span[jsname='V67aGc']").each(($item, $index) => {
      if ($index == 1) {
        cy.wrap($item).should("have.text", "Next").click();
      }
    });
    cy.wait(1000);
  });
  it("", () => {
    cy.log("hello");
  });
});

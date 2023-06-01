describe("mti assessment page", () => {
  it("start assessement", () => {
    // login
    cy.visit("https://app.lifology.com/login");
    cy.get("#phone").type("9999999251");
    cy.get("button[type='submit']").click();
    cy.get("input#one").type("1");
    cy.get("input#two").type("2");
    cy.get("input#three").type("3");
    cy.get("input#four").type("4");
    cy.get("input#five").type("5");
    cy.get("input#six").type("6");

    // user name validation

    let expName = "xyz";

    cy.get("h2.text-xl.font-bold.text-gray-700").then((x) => {
      let actName = x.text();
      //  BDD style
      expect(actName).to.not.equal(expName);
      //   TDD style
      assert.notEqual(actName, expName);
    });

    // go to insights

    cy.get("a[href='/my_child#tab0']").click({ multiple: true, force: true });

    // go to instructions

    cy.get("button[style='background-color: rgb(204, 80, 51);").click();

    // start assessment

    cy.get(
      "div.w-max.mt-4.ml-2.flex.justify-center.py-2.px-4.border.border-transparent.rounded-full.shadow-sm.text-sm.font-medium.text-white.bg-indigo-500.cursor-pointer"
    ).click();

    let value;

    for (value = 0; value <= 16; value++) {
      cy.get(
        ".w-max.ml-auto.flex.justify-center.py-2.px-4.border.border-transparent.rounded-full.shadow-sm.text-sm.font-medium.text-white.bg-indigo-500.cursor-pointer"
      ).click();
    }
  });
});

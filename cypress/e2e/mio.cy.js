describe("mio assessment page", () => {
  it("start assessment", () => {
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

    cy.get("button[style='background-color: rgb(48, 86, 140);']").click();

    // start assessment
    cy.get(
      "div.w-max.mt-4.ml-2.flex.justify-center.py-2.px-4.border.border-transparent.rounded-full.shadow-sm.text-sm.font-medium.text-white.bg-indigo-500.cursor-pointer"
    ).click();

    // get options

    cy.get(".mb-2.cursor-pointer").should("have.length", 5);

    cy.get(".mb-2.cursor-pointer")
      .its("length")
      .then((buttonCount) => {
        let submitted;
        for (submitted = 0; submitted <= 48; submitted++) {
          const randomIndex = Math.floor(Math.random() * buttonCount);

          cy.get(".mb-2.cursor-pointer").eq(randomIndex).click();

          cy.get(
            ".w-max.ml-auto.flex.justify-center.py-2.px-4.border.border-transparent.rounded-full.shadow-sm.text-sm.font-medium.text-white.bg-indigo-500.cursor-pointer"
          ).click();
        }
      });
  });
});

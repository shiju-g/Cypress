describe("coachFilter", () => {
  beforeEach("login", () => {
    cy.visit("http://localhost:3000/login");
    // waiting for page load complete
    cy.window().then((win) => {
      const performance = win.performance;
      if (performance && typeof performance.timing !== "undefined") {
        const pageLoadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        cy.wait(pageLoadTime);
      } else {
        cy.log("Performance timing not supported.");
      }
    });
    cy.get("input[type='text']").type("coach@mail.com");
    cy.wait(1000);
    cy.get("input[type='password']").type("password");
    cy.wait(1000);
    cy.get("button[type='submit']").click();
    cy.wait(1000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("testing dropdown", () => {
    cy.log("=========Welcome to coaching dashboard=========");
    cy.get("[href='/coach/appointment-list']").click();
    cy.get(
      "button[class='flex w-56 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50']"
    ).click();
    cy.window().then((win) => {
      const performance = win.performance;
      if (performance && typeof performance.timing !== "undefined") {
        const pageLoadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        cy.wait(pageLoadTime);
      } else {
        cy.log("Performance timing not supported.");
      }
    });
    cy.get(
      "[class='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200']"
    ).each(($option, $index, $options) => {
      if ($index == 0) {
        cy.wrap($option).should("have.text", "Completed").click();
      }
    });
    cy.wait(1000);
    cy.get("table tbody tr").each(($tr, $index, $trs) => {
      cy.wrap($tr).within(() => {
        cy.get("td:nth-child(3) span")
          .first()
          .each(($span, $index) => {});
      });
    });
  });
});

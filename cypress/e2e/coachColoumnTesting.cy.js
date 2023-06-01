describe("kkem table", () => {
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

  it.skip("getting all items", () => {
    cy.log("start testing table");
    cy.wait(35000);
    cy.get("table tbody tr").each(($row, $index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($td, $index, $tds) => {
          cy.wrap($td);
        });
      });
    });
  });

  // checking coach coloum

  it.only("checking coach column inside gm and coach", () => {
    cy.log("start testing");
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

    cy.url().then((url) => {
      cy.log(url);
      if (url.includes("/gm")) {
        cy.window().then((win) => {
          const performance = win.performance;
          if (performance && typeof performance.timing !== "undefined") {
            const pageLoadTime =
              performance.timing.loadEventEnd -
              performance.timing.navigationStart;
            cy.wait(pageLoadTime);
          } else {
            cy.log("Performance timing not supported.");
          }
        });

        cy.get("table thead tr").within(() => {
          const coloums = [];
          cy.get("th")
            .each(($col, $index, $cols) => {
              cy.wrap($col)
                .invoke("text")
                .then((text) => {
                  if (text == "Coach") {
                    alert(
                      "The Test has been completed successfully and the 'coach column' has been located."
                    );
                    coloums.push(text);
                  }
                });
            })
            .then(() => {
              if (coloums.length == 0) {
                alert(
                  "Unfortunately, the Test has failed as the 'coach column' could not be located."
                );

                throw new Error("coach not found");
              }
            });
        });
      } else {
        cy.get("a[href='/coach/appointment-list']").click({ force: true });
        // waiting for page load complete
        // waiting for page load complete
        cy.window().then((win) => {
          const performance = win.performance;
          if (performance && typeof performance.timing !== "undefined") {
            const pageLoadTime =
              performance.timing.loadEventEnd -
              performance.timing.navigationStart;
            cy.wait(pageLoadTime);
          } else {
            cy.log("Performance timing not supported.");
          }
        });
        cy.get("table thead tr").within(() => {
          const coloums = [];
          cy.get("th")
            .each(($col, $index, $cols) => {
              cy.wrap($col)
                .invoke("text")
                .then((text) => {
                  if (text == "Coach") {
                    alert(
                      "The Test has been completed successfully and the 'coach column' has been located."
                    );
                    coloums.push(text);
                  }
                });
            })
            .then((win) => {
              if (coloums.length == 0) {
                alert(
                  "Unfortunately, the Test has failed as the 'coach column' could not be located."
                );
                throw new Error("coach not found!");
              }
            });
        });
      }
    });
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});

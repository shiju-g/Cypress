describe("checkboxes", () => {
  it("validating checkboxes", () => {
    // checking visibility of check boxes
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    // visibility of checkboxes

    cy.get("input[type='checkbox']#monday").should("be.visible");

    // selecting the checkbox

    cy.get("input[type='checkbox']#monday").check().should("be.checked");

    // unchecking the checkbox

    cy.get("input[type='checkbox']#monday").uncheck();

    // checking the checkbox is unchecked or not

    cy.get("input[type='checkbox']#monday").uncheck().should("not.be.checked");

    // geting all the checkboxes

    cy.get("input.form-check-input[type='checkbox']");

    //checking all the checkboxes

    cy.get("input.form-check-input[type='checkbox']").check();

    // validating all the checkboxes are checked or not

    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");

    // unchecking all the chekboxes

    cy.get("input.form-check-input[type='checkbox']").uncheck();

    // validating all the checkboxes are unchecked or not

    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    //   selecting first checkbox

    cy.get("input.form-check-input[type='checkbox']").first().check();

    // validating checkbox is selected of not

    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");

    //   unchecking first check box

    cy.get("input.form-check-input[type='checkbox']").first().uncheck();

    //  selecting last checkbox

    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");

    // unchecking last checkbox

    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .uncheck()
      .should("not.be.checked");
  });
});

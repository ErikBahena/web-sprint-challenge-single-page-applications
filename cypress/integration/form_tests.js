describe("Pizza Ordering Form", () => {
  beforeEach(() => {
    // Before each test, we need fresh state
    // This means we don't want any state when a new test runs
    cy.visit("http://localhost:3000/pizza");
  });

  it("Sanity check", () => {});

  //   Getters
  const name = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const sizeDropDown = () => cy.get("select[id='size-dropdown']");
  const submitFormButton = () => cy.get(`button[id='order-button']`);

  describe("Inputs exist and are editable", () => {
    it("Name and Email inputs exist", () => {
      name().should("exist");
      emailInput().should("exist");
    });

    it("The name and email inputs accept a typed value", () => {
      name().should("have.value", "").type("Erik").should("have.value", "Erik");

      emailInput()
        .should("have.value", "")
        .type("erik@gmail.com")
        .should("have.value", "erik@gmail.com");
    });
  });

  describe("The user can submit the form", () => {
    it("the button with an id='order-button' exists", () => {
      submitFormButton().should("exist");
    });

    it("If any part of the form is blank or invalid, the button is disabled", () => {
      submitFormButton().should("be.disabled");
    });

    it("If the form is filled out properly the submit button should be enabled", () => {
      name().type("Erik");
      emailInput().type("erik@gmail.com");
      sizeDropDown().select("Extra Large");
      submitFormButton().should("not.be.disabled");
    });
    it("If the form is filled out properly and the user clicks the submit button, the form is submitted", () => {
      name().type("Erik");
      emailInput().type("erik@gmail.com");
      sizeDropDown().select("Extra Large");
      submitFormButton().should("not.be.disabled");
      submitFormButton().click();
    });
  });
});

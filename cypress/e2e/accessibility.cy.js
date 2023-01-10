/// <reference types="Cypress" />

// describe("Accessibility tests", () => {
//   beforeEach(() => {
//     cy.visit("/blog").get("main").injectAxe();
//   });
//   it("Has no detectable accessibility violations on load", () => {
//     cy.checkA11y();
//   });
// });

describe("Checking that tests are passing", () => {
  it("should visit", () => {
    cy.visit("/");
  });

  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

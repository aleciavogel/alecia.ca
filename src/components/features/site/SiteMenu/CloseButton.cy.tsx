import React from "react";
import CloseButton from "./CloseButton";

describe("<CloseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CloseButton />);
  });
});

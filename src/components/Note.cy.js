import React from "react";
import Note from "./Note";

describe("<Note />", () => {
  it("renders", () => {
    const note = {
      text: "This is a note",
      date: "Mar 30, 7:45 PM",
      title: "Note Title",
    };
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Note note={note} />);
  });
});

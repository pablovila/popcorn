describe("navigation between pages", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("goes to movies of selected genre", () => {
    cy.get("div.genre-card")
      .first()
      .click();
    cy.location("pathname").should("contains", "movies");
  });

  it("goes to selected movie", () => {
    cy.get("div.genre-card")
      .first()
      .click();
    cy.location("pathname").should("contains", "movies");
    cy.get("div.movie-card")
      .first()
      .find(".title")
      .click();
    cy.location("pathname").should(path => {
      expect(path).to.match(/\/movies\/(\d+)\/(\d+)/);
    });
  });
});

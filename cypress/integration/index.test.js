describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("succesfully loads", () => {
    cy.get("nav.navbar").should("contain", "Popcorn Movies");
    cy.get("div.genre-card")
      .its("length")
      .should("be.gt", 5);
    cy.get("div.genre-card")
      .first()
      .find("span.icon svg")
      .should("have.length", 1);
  });

  it("navbar is visible and adapts to different viewports", () => {
    cy.get("nav.navbar .navbar-item input").should("not.be.visible"); // cypress loads by default with a small viewport

    cy.viewport(1200, 1000);
    cy.get("nav.navbar .navbar-item input").should("be.visible");
    cy.get("nav.navbar .navbar-item input")
      .type("Captain Marvel")
      .should("have.value", "Captain Marvel");
  });

  it("navbar have only dumb components", () => {
    cy.viewport(1200, 1000);
    cy.get("nav.navbar .navbar-item button.is-link").click();
    cy.location("pathname").should("be.eq", "/"); // it's still same route
    cy.get("nav.navbar .navbar-item button.is-info").click();
    cy.location("pathname").should("be.eq", "/"); // it's still same route
  });
});

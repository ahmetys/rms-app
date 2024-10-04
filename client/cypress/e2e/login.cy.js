describe("login", () => {
  it("login", () => {
    cy.visit("/");
    cy.get("[data-cy='username']").type("test");
    cy.get("[data-cy='password']").type("test");
    cy.get("[data-cy='login-button']").click();
    cy.contains("Sie sind erfolgreich angemeldet");
  });
});

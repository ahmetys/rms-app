describe("register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("register", () => {
    cy.get("[data-cy='register']").click();
    cy.get("[data-cy='username']").type("test2");
    cy.get("[data-cy='email']").type("test2@email.com");
    cy.get("[data-cy='password']").type("test2");
    cy.get("[data-cy='confirm-password']").type("test2");
    cy.get("[data-cy='privacy-policy']").check();
    cy.get("[data-cy='register-button']").click();
    cy.contains("Anmeldung erfolgreich");
  });
});

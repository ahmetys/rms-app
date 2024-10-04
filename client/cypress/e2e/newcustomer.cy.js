describe("New Customer", () => {
  it("new customer", () => {
    cy.login();
    cy.visit("/customers");
    cy.get("[data-cy='new-customer-icon']").click();
    cy.get("[data-cy='name']").type("Test Customer");
    cy.get("[data-cy='addresse']").type("Test Adresse");
    cy.get("[data-cy='phone']").type("1234567890");
    cy.get("[data-cy='email']").type("test@customer.com");
    cy.get("[data-cy='whatsapp']").check();
    cy.get("[data-cy='sms']").check();
    cy.get("[data-cy='call']").check();
    cy.get("[data-cy='add-new-customer-button']").click();
    cy.contains("Neuer Kunde hinzugefügt");
  });
});

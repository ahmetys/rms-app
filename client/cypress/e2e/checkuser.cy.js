describe("check user", () => {
  beforeEach(() => {
    cy.fixture("users.json").as("users");
  });

  it("check user", () => {
    cy.get("@users").then((users) => {
      const user = users[0];

      cy.visit("/");
      cy.get("[data-cy='username']").type(user.username);
      cy.get("[data-cy='password']").type(user.password);
      cy.get("[data-cy='login-button']").click();
      cy.get("[data-cy='user-icon']").click();
      cy.get("[data-cy='logged-in-user']").should(($btn) => {
        expect($btn.text()).to.eq(user.username);
      });
    });
  });
});

describe('Login Tests', () => {
  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  it('logs in successfully with valid credentials', function () {
    cy.login(this.usersData.validUser.email, this.usersData.validUser.password);
  });
});

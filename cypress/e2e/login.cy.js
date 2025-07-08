describe('Automation Exercise - Login Test', () => {
  it('should display login page and attempt login', () => {
    // Visit login page
    cy.visit('https://automationexercise.com/login');

    // Check page title or URL
    cy.url().should('include', '/login');

    // Enter email
    cy.get('input[data-qa="login-email"]').type('romicoolvarghese@gmail.com');

    // Enter password
    cy.get('input[data-qa="login-password"]').type('Password@123');

    // Click login button
    cy.get('button[data-qa="login-button"]').click();

    // Assert logout button visible after login
    cy.get('a').contains('Logout').should('be.visible');
  });
});

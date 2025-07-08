Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationexercise.com/login');
  cy.get('input[data-qa="login-email"]').type("romicoolvarghese@gmail.com");
  cy.get('input[data-qa="login-password"]').type("Password@123");
  cy.get('button[data-qa="login-button"]').click();
  // Verify login success by checking Logout visible
  cy.get('a').contains('Logout').should('be.visible');
});

describe('Add to Cart', () => {
  before(() => {
    cy.fixture('users').as('usersData');
  });

  it('logs in and adds a product to the cart', function () {
    cy.login(this.usersData.validUser.email, this.usersData.validUser.password);

    cy.get('a[href="/products"]').click();
    cy.url().should('include', '/products');

    cy.get('.product-overlay').first().scrollIntoView().trigger('mouseover', { force: true });
    cy.get('.product-overlay').first().contains('Add to cart').click({ force: true });

    cy.get('#cartModal').should('be.visible');
    cy.get('#cartModal').contains('Continue Shopping').click();

    cy.get('a[href="/view_cart"]').first().click();
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('contain.text', 'Blue Top');
  });
});
/// <reference types="cypress" />

context('Assertions', () => {
  const getStore = () => cy.window().its('app.$store');

  const justFilteredProducts = (products, category) => {
    return (
      products.filter((product) => product.category === category).length ===
      products.length
    );
  };

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('teste', () => {
    cy.get('.app-categories__category').should('have.length', 4);
    cy.get('.app-categories__category').eq(0).click();
    getStore().then((store) => {
      expect(justFilteredProducts(store.state.products.products, 'dessert')).to
        .be.true;
    });
  });
});

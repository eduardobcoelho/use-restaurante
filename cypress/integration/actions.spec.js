/// <reference types="cypress" />

context('Ações', () => {
  const getStore = () => cy.window().its('app.$store');

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Adicionar produto', () => {
    // step = 1 (infos)
    cy.get('[data-test="cadaster-product"]').trigger('click');
    cy.get('[data-test="product-name"]').type('Lasanha');
    cy.get('[data-test="product-details"]').type(
      'Carne moida, queijo mussarela, presunto e queijo ralado',
    );
    cy.get('[data-test="product-value"]').type(119.9);
    cy.get('[data-test="product-category"]').trigger('click', { force: true });
    cy.get('#list-item-105-2 > .v-list-item__content').trigger('click');
    cy.get('.v-input--radio-group__input > :nth-child(3)').trigger('click');
    cy.get('[data-test="product-form-info"]').submit();
    getStore().then((store) => {
      expect(store.getters.currentProduct).to.not.be.null;
    });
    // step = 2 (pictures)
    const uploader1Pic = 'lasanha_1.jpeg';
    const uploader2Pic = 'lasanha_2.jpeg';
    const uploader3Pic = 'lasanha_3.jpeg';
    cy.get('[data-test="uploader1-input"]').attachFile(uploader1Pic);
    cy.get('[data-test="uploader2-input"]').attachFile(uploader2Pic);
    cy.get('[data-test="uploader3-input"]').attachFile(uploader3Pic);
    cy.get('[data-test="btn-submit"]').trigger('click');
    cy.wait(1000);
    getStore().then((store) => {
      const productAdded =
        store.getters.products[store.getters.products.length - 1];
      expect(productAdded.name.toLowerCase()).to.be.equal('lasanha');
      expect(store.getters.notification.message).to.be.equal(
        'Produto cadastrado',
      );
    });
  });

  it('Remover produto', () => {
    const firstProduct = cy.get('.product-card').first();
    firstProduct.get('.product-card__actions--action').eq(1).trigger('click');
    cy.get('[data-test="btn-submit"]').trigger('click');
    getStore().then((store) =>
      expect(store.getters.notification.message).to.be.equal(
        'Produto removido',
      ),
    );
  });
});

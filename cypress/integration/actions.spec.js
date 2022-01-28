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
    cy.get('#list-item-105-2').trigger('click');
    cy.get('.v-input--radio-group__input > :nth-child(3)').trigger('click');
    cy.get('[data-test="product-form-info"]').submit();
    getStore().then((store) => {
      expect(store.getters.currentProduct).to.not.be.null;
    });
    // step = 2 (pictures)
    cy.get('[data-test="uploader1-input"]').attachFile('lasanha_1.jpeg');
    cy.get('[data-test="uploader2-input"]').attachFile('lasanha_2.jpeg');
    cy.get('[data-test="uploader3-input"]').attachFile('lasanha_3.jpeg');
    cy.wait(500);
    cy.get('[data-test="btn-submit"]').trigger('click');
    getStore().then((store) => {
      expect(
        store.getters.products[
          store.getters.products.length - 1
        ].name.toLowerCase(),
      ).to.be.equal('lasanha');
      expect(store.getters.notification.message.toLowerCase()).to.be.equal(
        'produto cadastrado',
      );
    });
  });

  it('Remover produto', () => {
    cy.get('.product-card')
      .first()
      .get('.product-card__actions--action')
      .eq(1)
      .trigger('click');
    cy.get('[data-test="btn-submit"]').trigger('click');
    getStore().then((store) =>
      expect(store.getters.notification.message.toLowerCase()).to.be.equal(
        'produto removido',
      ),
    );
  });

  it('Atualizar produto', () => {
    cy.get('.product-card')
      .first()
      .get('.product-card__actions--action')
      .eq(2)
      .trigger('click');
    // step 1 (info)
    cy.get('[data-test="product-name"]').clear();
    cy.get('[data-test="product-value"]').clear();
    cy.get('[data-test="product-name"]').type('Carne de sol');
    cy.get('[data-test="product-value"]').type(99.9);
    cy.get('.v-input--radio-group__input > :nth-child(2)').trigger('click');
    cy.get('[data-test="product-form-info"]').submit();
    // step 2 (pictures)
    cy.get('[data-test="uploader1-input"]').attachFile('carne_de_sol.jpeg');
    cy.wait(500);
    cy.get('[data-test="btn-submit"]').trigger('click');
    getStore().then((store) => {
      expect(store.getters.products[1].name.toLowerCase()).to.be.equal(
        'carne de sol',
      );
      expect(store.getters.notification.message.toLowerCase()).to.be.equal(
        'dado(s) do produto atualizado(s)',
      );
    });
  });
});

/// <reference types="cypress" />

context('Filtros', () => {
  const getStore = () => cy.window().its('app.$store');

  const verifyCategory = (products, category) =>
    products.filter((product) => product.category === category).length ===
    products.length;

  const verifyFreeSearch = (products, category) =>
    products.filter((product) =>
      product.name.toLowerCase().includes(category.toLowerCase()),
    ).length === products.length;

  const verifyOrderBy = (products, slug) => {
    let verification = 0;
    products.map((item, index) => {
      if (products[index + 1]) {
        verification += slug
          ? item.value < products[index + 1].value
            ? 1
            : 0
          : item.value > products[index + 1].value
          ? 1
          : 0;
      }
    });
    return verification === 0 ? true : false;
  };

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Filtro: categorias (sobremesas)', () => {
    cy.get('.app-categories__category').eq(0).click();
    getStore().then((store) => {
      expect(verifyCategory(store.getters.products, 'dessert')).to.be.true;
    });
  });

  it('Filtro: categorias (bebidas)', () => {
    cy.get('.app-categories__category').eq(1).click();
    getStore().then((store) => {
      expect(verifyCategory(store.getters.products, 'drink')).to.be.true;
    });
  });

  it('Filtro: categorias (pratos completo)', () => {
    cy.get('.app-categories__category').eq(2).click();
    getStore().then((store) => {
      expect(verifyCategory(store.getters.products, 'fullDish')).to.be.true;
    });
  });

  it('Filtro: categorias (promoções)', () => {
    cy.get('.app-categories__category').eq(3).click();
    getStore().then((store) => {
      expect(verifyCategory(store.getters.products, 'promotion')).to.be.true;
    });
  });

  it('Filtro: busca livre', () => {
    cy.get('[data-test="input-free-search"]').type('MoNsTER');
    cy.wait(400);
    getStore().then((store) => {
      expect(verifyFreeSearch(store.getters.products, 'MoNsTER')).to.be.true;
    });
  });

  it('Filtro: maior preço', () => {
    cy.get('.order-by__button').first().trigger('click');
    cy.get('.order-by__option').first().trigger('click');
    getStore().then((store) => {
      expect(verifyOrderBy(store.getters.products, 1)).to.be.true;
    });
  });

  it('Filtro: menor preço', () => {
    cy.get('.order-by__button').first().trigger('click');
    cy.get('.order-by__option').eq(1).trigger('click');
    getStore().then((store) => {
      expect(verifyOrderBy(store.getters.products, 0)).to.be.true;
    });
  });

  it('Filtro: todos juntos', () => {
    cy.get('.app-categories__category').eq(0).click();
    cy.get('[data-test="input-free-search"]').type('TORTA');
    cy.wait(400);
    cy.get('.order-by__button').first().trigger('click');
    cy.get('.order-by__option').first().trigger('click');
    getStore().then((store) => {
      expect(verifyCategory(store.getters.products, 'dessert')).to.be.true;
      expect(verifyFreeSearch(store.getters.products, 'TORTA')).to.be.true;
      expect(verifyOrderBy(store.getters.products, 1)).to.be.true;
    });
  });
});

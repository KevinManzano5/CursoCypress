class Dafiti {
  getBtnOfertas() {
    return cy.xpath("//a[contains(text(), 'OFERTAS')]");
  }

  getBtnPerfume() {
    return cy.xpath(
      "//img[@alt='Perfume Nautica Blue De Nauitca Para Hombre 100 Ml Nautica']"
    );
  }

  getBtnAddToCart() {
    return cy.xpath("//button[@id='AddToCart']");
  }

  getImgDafiti() {
    return cy.xpath("//img[@alt='Dafiti']");
  }

  getTxtSearchBar() {
    return cy.xpath("//input[@id='searchInput']");
  }

  getZapato() {
    return cy.xpath("//img[@alt='Zapato Dama Negro Tellenzi Booss Tellenzi']");
  }

  getSlcSize() {
    // return cy.xpath("//div[@class='selectContainer']");
    cy.get(".selectContainer");
  }
}

module.exports = { Dafiti };

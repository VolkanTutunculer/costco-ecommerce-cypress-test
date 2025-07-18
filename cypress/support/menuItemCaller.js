export function validateSubMenu(mainMenuSelector, expectedItems) {
  cy.get(mainMenuSelector)
    .trigger('mouseover')
    .parent()
    .find('ul.submenu a')
    .should('be.visible')
    .then($els => {
      const actualItems = [...$els].map(el => el.textContent);
      expectedItems.forEach(expectedItem => {
        expect(actualItems).to.include(expectedItem);
      });
    });
}

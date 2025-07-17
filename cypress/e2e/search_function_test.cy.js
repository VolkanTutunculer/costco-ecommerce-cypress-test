/// <reference types="cypress" />

describe('Search test', () => {

    it('Visits Trendyol Homepage', () => {
        cy.visit('/');
        cy.title().should('include', 'Trendyol');
        cy.get('div [title="Kapat"]').click();
    });
})


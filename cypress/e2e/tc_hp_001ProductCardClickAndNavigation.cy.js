/// <reference types="cypress" />

describe("Hot Sellers Product Card Interaction Validation", () =>{
    beforeEach("Visit Ecommerce HomePage", () =>{
        cy.visit("/");
    })

    it("Hot Sellers Validation", () =>{
        cy.get("div[class *='block-products-list']").should("be.visible");
        cy.get("div[class*='products-grid grid']").find("li").should("be.visible");
    })
})
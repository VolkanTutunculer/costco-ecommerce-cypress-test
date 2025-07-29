/// <reference types="cypress" />
import { validateSubMenu } from "../support/menuItemCaller";
import { menuItems } from "../support/menuItems";

describe("Home Page Validation", () => {
    beforeEach("Visits Ecommerce Homepage and Validate", () => {
        cy.visit("/");
    });

    it("Home Page Load Validation", () => {
        cy.log("Title Validation");
        cy.title().should("include", "Home Page");

        cy.log("Home Page Header Check");
        cy.get("h1 > span[data-ui-id*='page-title']")
            .should("have.text", "Home Page")
            .and("be.visible");
    });

    it("Luma Logo Validation", () => {
        cy.get("img[src*=luma]").should("be.visible");
    });

    it("Menu Validation", () => {
        cy.get("#ui-id-2 > li > a").then(($elements) => {
            const actualMenuItems = [...$elements].map((el) => el.textContent);

            menuItems.mainMenu.forEach((expectedItem) => {
                expect(actualMenuItems).to.include(expectedItem);
            });
        });
    });

    it("Woman Sub Menu Validation", () => {
        validateSubMenu("#ui-id-4", menuItems.woman);
    });

    it("Man Sub Menu Validation", () => {
        validateSubMenu("#ui-id-5", menuItems.men);
    });

    it("Gear Sub Menu Validation", () => {
        validateSubMenu("#ui-id-6", menuItems.gear);
    });

    it("Training Sub Menu Validation", () => {
        validateSubMenu("#ui-id-7", menuItems.training);
    });

    it("Promo Photo Validation", () => {
        cy.get("div  [class *= 'block-promo'] > img").should("be.visible").and("have.attr", "src");
    });

    it("Hot Sellers Header and Trend Sentence Validation", () => {
        cy.get("div > h2[class='title']").should("have.text", "Hot Sellers").and("be.visible");
        cy.get("div > p[class='info']").should("have.text", "Here is what`s trending on Luma right now").and("be.visible");
    })

    it("Hot Sellers Product Grid Validation", () => {
        cy.get("div[class *='block-products-list']").should("be.visible");
        cy.get("div[class*='products-grid grid']").find("li").should("be.visible").and("have.length", "6");
    });

    it("Hot Sellers Product Name and Price Validation", () => {
        cy.get("div[class*='product-item-details']").should("not.be.empty").and("be.visible");
        cy.get("div[class*='product-item-details'] strong a").should("have.attr", "href");
        cy.get("[class='price']").should("be.visible").each(($el) => {
            const priceInfo = $el.text();

            expect(priceInfo).to.include("$");
            expect(priceInfo).to.have.length(6);
        })
    })
});


it("Hot Sellers Product Size, Color and Add to Chart Validation", () => {

});


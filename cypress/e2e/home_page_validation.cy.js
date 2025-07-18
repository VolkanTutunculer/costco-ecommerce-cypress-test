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
        cy.get("h1 > span[data-ui-id*='page-title']").should(
            "have.text",
            "Home Page"
        );
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
});

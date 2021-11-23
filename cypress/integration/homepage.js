

describe("renders the homepage", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("renders correctly", () => {
        cy.get("#container").should("exist");
    })
    it("accept button adds item to accepted list", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get("#approvedLength").should('have.text', "Approved items - 0")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .productContainer > .items-center > .buttonAccept').click();
        /* ==== End Cypress Studio ==== */
        cy.get("#approvedLength").should('have.text', "Approved items - 1")
        cy.get(".approved").should("exist")
        cy.get(".approved > .flex > #product_title").should("have.text", "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    })
    it("each cart can add multiple items to list", () => {
        cy.get("#approvedLength").should('have.text', "Approved items - 0")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .productContainer > .items-center > .buttonAccept').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .productContainer > .items-center > .buttonAccept').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .productContainer > .items-center > .buttonAccept').click();
        cy.get("#approvedLength").should('have.text', "Approved items - 3")
    })
    it("decline button add item to decline list", () => {
        cy.get("#declinedLength").should('have.text', "Declined items - 0")
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .productContainer > .items-center > .buttonDelete').click();
        /* ==== End Cypress Studio ==== */
        cy.get("#declinedLength").should('have.text', "Declined items - 1")
        cy.get(".declined > .flex > #product_title").should("have.text", "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    })
    it("each cart can decline multiple items to list", () => {
        cy.get("#declinedLength").should('have.text', "Declined items - 0")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .productContainer > .items-center > .buttonDelete').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .productContainer > .items-center > .buttonDelete').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .productContainer > .items-center > .buttonDelete').click();
        cy.get("#declinedLength").should('have.text', "Declined items - 3")
    })
})
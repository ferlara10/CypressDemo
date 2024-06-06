// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("addCart", (itemName) => {
    cy.get("a.hrefch").contains(itemName).click();
    cy.get("a.btn").contains("Add to cart").click();
    cy.get("a.nav-link").contains("Home").click();
});

Cypress.Commands.add("fillForm", (customerName, creditCard) => {
    cy.get("#name").type(customerName);
    cy.get("#card").type(creditCard);
    cy.get("button.btn-primary").contains("Purchase").click();
});
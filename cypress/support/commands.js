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

Cypress.Commands.add('login', (user, password) => {
    cy.get("input[placeholder='Email Address or Username']").type(user)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click()
})

Cypress.Commands.add('clearLoginForm', () => {
    cy.get("input[placeholder='Email Address or Username']").clear()
    cy.get("input[placeholder='Password']").clear()
})

Cypress.Commands.add('logout', () => {
    cy.get('.userProfileNav').trigger('mouseover')
    cy.contains('Logout').should('be.visible').click()
})

Cypress.Commands.add('goToConfigOption', (option) => {
    cy.get('.userProfileNav').trigger('mouseover')
    cy.contains(option).should('be.visible').click()
})

/// <reference types="cypress" />   

describe('Login feature - Testing', () => {
    before(() => {
        cy.visit('https://dashboard-dev.ecoationsvc.io')
    })

    it('Verify that log in feature working properly', () => {
        
        // Web - User should be navigate back to log in screen without changing password
        cy.contains('Forgot password?').click()
        cy.contains('Send Password Reset Email').should('be.disabled')
        cy.get('#ecoationForgotPassword_email').type('automation_testing@ecoation.com')
        cy.contains('Send Password Reset Email').should('be.enabled')
        cy.contains('Cancel').click()

        cy.get("input[placeholder='Email Address or Username']").should('be.visible')
        cy.get("input[placeholder='Password']").should('be.visible')

        // Web - User should not recover password when with invalid email id
        cy.contains('Forgot password?').click()
        cy.get('#ecoationForgotPassword_email').type('invalid_email@ecoation.com')
        cy.contains('Send Password Reset Email').click()

        cy.get('.ant-alert-message').should('contain', 'Error')
        cy.get('.ant-alert-description').should('contain', 'Username/client id combination not found.')
        cy.contains('Cancel').click()

        // Web - User should not recover password when with invalid username
        cy.contains('Forgot password?').click()
        cy.get('#ecoationForgotPassword_email').type('invalue_username')
        cy.contains('Send Password Reset Email').click()

        cy.get('.ant-alert-message').should('contain', 'Error')
        cy.get('.ant-alert-description').should('contain', 'Username/client id combination not found.')
        cy.contains('Cancel').click()

        // Web - User should not be able to log in with incorrect email id
        cy.login('invalid_email_address@ecoation.com', 'invalid_password')
        cy.get('.ant-alert-message').should('contain', 'Error')
        cy.get('.ant-alert-description').should('contain', 'User does not exist.')
        cy.clearLoginForm()

        // Web - User should not be able to log in with incorrect username id
        cy.login('invalid_username', 'invalid_password')
        cy.get('.ant-alert-message').should('contain', 'Error')
        cy.get('.ant-alert-description').should('contain', 'User does not exist.')
        cy.clearLoginForm()

        // Web - User should be able to log in with correct email id and password
        cy.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'))
        cy.logout()

        // Web - User should not be able to log in with correct username and password
        cy.login(Cypress.env('TEST_USER'), Cypress.env('TEST_USER_PASSWORD'))
        cy.logout()
    })
  })
  
describe('Terry Testing google.com', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it.only('Terry Testing google.com', () => {
    cy.contains('Sign in').should('not.be.visible').click()
  })
})

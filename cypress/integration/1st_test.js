describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it.only('displays two todo items by default', () => {
    cy.contains('Sign in').should('be.visible')
  })
})

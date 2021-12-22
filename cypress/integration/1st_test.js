describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it.only('displays two todo items by default', () => {
    cy.get("img[alt='Google']").should('be.visible')
  })
})

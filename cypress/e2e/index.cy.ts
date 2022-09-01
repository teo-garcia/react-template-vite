/**
 * TODO: Fix ESLint issues
 */
/* eslint-disable */
describe('<HomePage /> tests', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.findByText(/react template vite/i).should('exist')
  })
})

describe('App Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main heading', () => {
    cy.contains('h1', 'Vite + React').should('be.visible')
  })

  it('should display both logos with correct alt text', () => {
    cy.get('img[alt="Vite logo"]').should('be.visible')
    cy.get('img[alt="React logo"]').should('be.visible')
  })

  it('should have working counter button', () => {
    // Check initial count
    cy.contains('button', 'count is 0').should('be.visible')
    
    // Click the button and verify count increases
    cy.contains('button', 'count is 0').click()
    cy.contains('button', 'count is 1').should('be.visible')
    
    // Click multiple times to verify it keeps incrementing
    cy.contains('button', 'count is 1').click()
    cy.contains('button', 'count is 2').should('be.visible')
    
    cy.contains('button', 'count is 2').click()
    cy.contains('button', 'count is 3').should('be.visible')
  })

  it('should display the HMR instruction text', () => {
    cy.contains('Edit src/App.tsx and save to test HMR').should('be.visible')
  })

  it('should display the read-the-docs text', () => {
    cy.contains('Click on the Vite and React logos to learn more').should('be.visible')
  })

  it('should have clickable logo links', () => {
    // Check Vite logo link
    cy.get('a[href="https://vite.dev"]')
      .should('have.attr', 'target', '_blank')
      .find('img[alt="Vite logo"]')
      .should('be.visible')
    
    // Check React logo link
    cy.get('a[href="https://react.dev"]')
      .should('have.attr', 'target', '_blank')
      .find('img[alt="React logo"]')
      .should('be.visible')
  })

  it('should have proper CSS classes applied', () => {
    cy.get('img[alt="Vite logo"]').should('have.class', 'logo')
    cy.get('img[alt="React logo"]').should('have.class', 'logo').and('have.class', 'react')
    cy.get('.card').should('exist').and('be.visible')
    cy.get('.read-the-docs').should('exist').and('be.visible')
  })
})
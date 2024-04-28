describe('Login', () => {
  it('take to sign in page', () => {
    cy.visit('https://www.rapidfort.com/')
    
    // Click on Sign in and visit us01
    cy.contains ('a.button', 'Sign in').invoke('attr', 'href')
    .then(href => {
      cy.visit(href);
    });

    cy.url().should('include', '/app/login')
  })

  it('login with credentials', () => {
    cy.visit('https://us01.rapidfort.com/app/login');

    cy.get('input[name="email"]')
      .type('rf@rapidfort.com')
      .should('have.value', 'rf@rapidfort.com');

    // Input and verify password
    cy.get('input[name="password"]')
      .type('password@123')
      .should('have.value', 'password@123');
    
    // Press enter to submit form
    cy.get('input[name="password"]')
      .type('{enter}');
  })
})
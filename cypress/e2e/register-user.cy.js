describe('register-user', () => {
  it('register-user', () => {
    cy.visit('https://www.automationexercise.com/')

    //Phase 1 - enter name and email
    cy
      .get('.shop-menu > .nav > :nth-child(4) > a')
      .click()

    cy
      .get('[data-qa="signup-name"]')
      .type('Eduard Test')
    
    cy
      .get('[data-qa="signup-email"]')
      .type('eduard.anton88@yahoo.com')
    
    cy
      .get('[data-qa="signup-button"]')
      .click()

    //Phase 2 - enter account information

    cy
      .get('#id_gender1')
      .click()

    cy
      .get('[data-qa="password"]')
      .type('Test123')

    cy
      .get('[data-qa="days"]')
      .select('12')

    cy
      .get('[data-qa="months"]')
      .select('September')

    cy
      .get('[data-qa="years"]')
      .select('1992')

    cy
      .get('#newsletter')
      .click()

    cy
      .get('#optin')
      .click()

    //Phase 3 account information - mandatory fields

    cy
      .get('[data-qa="first_name"]')
      .type('Eduard')

    cy
      .get('[data-qa="last_name"]')
      .type('Test')

    cy
      .get('[data-qa="address"]')
      .type('20 W 34th St')

    cy
      .get('[data-qa="country"]')
      .select('United States')
    
    cy
      .get('[data-qa="state"]')
      .type('California')

    cy
      .get('[data-qa="city"]')
      .type('New York')

    cy
      .get('[data-qa="zipcode"]')
      .type('1234')

    cy
      .get('[data-qa="mobile_number"]')
      .type('20341234567')

      cy
        .get('[data-qa="create-account"]')
        .click()
    
  })

})
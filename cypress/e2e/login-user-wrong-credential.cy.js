describe('login-user', () => {
    it('login user with corect credentials', () => {
        cy
            .visit('https://www.automationexercise.com/')

        cy
            .get('.shop-menu > .nav > :nth-child(4) > a')
            .click()

        cy
            .get('[data-qa="login-email"]')
            .type('eduard.test@yahoo.com')

        cy
            .get('[data-qa="login-password"]')
            .type('Test999')

        cy
            .get('[data-qa="login-button"]')
            .click()

        cy
            .get('.login-form > form > p')
            .contains('Your email or password is incorrect!')
            .should('be.visible')
        
    })
})
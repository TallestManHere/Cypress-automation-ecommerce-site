describe('login-user', () => {
    it('login user with corect credentials', () => {
        cy
            .visit('https://www.automationexercise.com/')

        cy
            .get('.shop-menu > .nav > :nth-child(4) > a')
            .click()

        cy
            .get('[data-qa="login-email"]')
            .type('eduard.anton88@yahoo.com')

        cy
            .get('[data-qa="login-password"]')
            .type('Test123')

        cy
            .get('[data-qa="login-button"]')
            .click()
        
        cy
            .get('.shop-menu > .nav > :nth-child(5) > a')
            .click()
    })
})
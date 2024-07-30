///<reference types="cypress"/>

export class authenticationPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        emailInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('[data-testid="login-button"]'),
        dashboardElement: () => cy.get('.mt-1')
    }

    enterCredentials(email,password){
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click()
    }

    verifyLoginSuccessful(){
        cy.wait(2000)
        this.elements.dashboardElement().contains('Dashboard')
    }

    verifyLoginUnsuccessful(){
        cy.wait(2000)
        cy.contains('Unable to login with these credentials')
    }
}
///<reference types="cypress"/>

export class authenticationPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        emailInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('.sc-hLBbgP'),
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
        this.elements.dashboardElement().contains('Dashboard')
    }
}
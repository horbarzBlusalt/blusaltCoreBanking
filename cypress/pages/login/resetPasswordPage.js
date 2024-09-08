///<reference types="cypress"/>

export class resetPasswordPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        forgotPasswordBtn: () => cy.get('.forgot-text'),
        emailInput: () => cy.get('[data-testid="text-input"]')
    }

    clickForgotPasswordBtn(){
        this.elements.forgotPasswordBtn().click()
        cy.get('.heading_2').contains("Enter Your Email Address")
    }

    enterEmail(email){
        this.elements.emailInput().type(email)
    }

    clickContinueBtn(){
        cy.contains("Continue").click()
    }

    verifyResetPasswordPage(){
        cy.url().should('include','/forgot-password')
    }

    verifyInvalidEmailError(){
        cy.get('.ms-2').contains("Please enter a valid email")
    }

    verifyTokenContinueInactive(){
        cy.contains("Continue").should('be.disabled')
    }

    enterToken(){
        cy.get('[aria-label="Please enter OTP character 1"]').type(1)
        cy.get('[aria-label="Please enter OTP character 2"]').type(2)
        cy.get('[aria-label="Please enter OTP character 3"]').type(3)
        cy.get('[aria-label="Please enter OTP character 4"]').type(4)
        cy.get('[aria-label="Please enter OTP character 5"]').type(5)
        cy.get('[aria-label="Please enter OTP character 6"]').type(6)
    }

    accountNotExistError(){
        cy.get('.Toastify__toast-body > :nth-child(2) > .d-flex > :nth-child(2)').should('exist')
    }
}
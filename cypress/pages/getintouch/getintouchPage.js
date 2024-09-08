///<reference types="cypress"/>

export class getintouchPage{
    element= {
        navigateToApp: () => cy.visit('/get-in-touch'),
        firstNameInput: () => cy.get('#firstName'),
        lasttNameInput: () => cy.get('#lastName'),
        emailInput:() => cy.get('#email'),
        phoneNumberInput: () => cy.get("[data-testid='phone-input-field']"),
        countryInput:() => cy.get('.form-group-select__input-container'),
        sendBtn: () => cy.get("[data-testid='get-in-touch-btn']"),
    }

    enterDetails(firstName, lastName, email, phoneNumber, country){
        this.element.firstNameInput().type(firstName)
        this.element.lasttNameInput().type(lastName)
        this.element.emailInput().type(email)
        this.element.phoneNumberInput().type(phoneNumber)
        this.element.countryInput().type(`${country} {enter}`)
        cy.wait(1000)
    }

    clickSendButton(){
        this.element.sendBtn().click()
    }

    verifySuccessMessage(){
        cy.contains("Thank you for reaching out, we will get back soon.")
    }

    displayErrorMessage(){
        cy.contains("This field cannot be empty")
    }

    displayNotificationToast(){
        cy.contains('Tenant invite had already been sent')
    }
}
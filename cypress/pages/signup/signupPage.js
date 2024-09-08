///<reference types="cypress"/>

export class signupPage{
    elements = {
        navigateToApp: (code) => cy.visit(`/sign-up?invite-code=${code}`),
        organizationNameInput: () => cy.get("#organization_name")
    }

    populateForm(orgName){
        this.elements.organizationNameInput().type(orgName)
    }

    
}
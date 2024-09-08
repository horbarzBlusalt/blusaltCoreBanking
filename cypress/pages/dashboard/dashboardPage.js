///<reference types="cypress"/>

export class dashboardPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        dashboardText: () => cy.get('.mt-1'),
        dateRange:() => cy.get('#date-range'),
    }

    verifyDashboardData(){
        cy.contains("TOTAL REVENUE")
        cy.contains("TOTAL CREDIT")
        cy.contains("Total Customers")
        cy.contains("Total Debits")
        cy.contains("loan amount disbursed")
        cy.contains("loan amount paid back")
        cy.contains("number of transactions")
        cy.contains("Total loan requests")
        cy.contains("bad loans")
        cy.contains("Total products")
    }

    clickDateFilter(selector){
       this.elements.dateRange().select(selector)
    }


}
///<reference types="cypress"/>

const statuses = ['Invalid', 'Pending', 'Active', 'Transfer in progress', 'Transfer on hold', 'Closed', 'Rejected', 'Withdrawn', 'Blacklisted', 'Exit']

export class customersPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        toggleEle: () => cy.get('.toggler'),
        filterDropDown:() => cy.get('[data-testid="filter-btn"] > .d-none'),
        externalIdSearch:() => cy.get(':nth-child(1) > .form-group > [data-testid="input-wrapper"] > [data-testid="text-input"]'),
        customerIdSearch:() => cy.get(':nth-child(2) > .form-group > [data-testid="input-wrapper"] > [data-testid="text-input"]'),
        saveFilterBtn: () => cy.get(':nth-child(2) > .dropdown-menu > [data-testid="table-filter"] > #filter-footer > .sc-dkrFOg')


    }

    getStatusIndex(status){
        for(let i=1; i<=statuses.length;i++){
            if(status===statuses[i]){
                return i+1
            }
        }
        return
    }

    verifyCustomerPage(){
        cy.wait(10)
        cy.contains("Customers")
        cy.contains(" Total Number of individual Customers")
        cy.contains("active individual Customers")
        cy.contains("Blacklisted Customers")
        cy.get('.table__head > tr > :nth-child(1)').contains('Name')
        cy.get('.table__head > tr > :nth-child(2)').contains('External ID')
        cy.get('.table__head > tr > :nth-child(3)').contains('Customer Number')
        cy.get('.table__head > tr > :nth-child(4)').contains('Status')
        cy.get('.table__head > tr > :nth-child(5)').contains('Office')
        cy.get('.table__head > tr > :nth-child(6)').contains('Assigned Staff')
        cy.get('.table__head > tr > :nth-child(7)').contains('Date Created')    
    }

    clickSideToggle(){
        this.elements.toggleEle().click()
    }

    clickCustomerModule(){
        cy.get(':nth-child(2) > .sidebar__nav__item__link').click()
    }

    clickBlackListed(){
        cy.get('[href="/customers/individual/blacklisted"] > .nav-link').click()
    }

    verifyCustomerStatus(status){
        var statusPill = 'success'
        if(status.toLowerCase()==="active"){
            statusPill = 'success'
        }else if(status.toLowerCase()==="pending"){
            statusPill = 'warning'
        }else if(status.toLowerCase()==="transfer on hold"){
            statusPill = 'finished'
        }else if(status.toLowerCase()==="rejected"){
            statusPill = 'danger'
        }else if(status.toLowerCase()==="transfer in progress"){
            statusPill = 'disabled'
        }
        else{
            statusPill = status
        }
        cy.get('table tbody tr').each(($row) => {
            cy.wrap($row)
              .find('.pill--'+statusPill.toLowerCase()) // Replace with your column selector
              .should('contain.text', status);
          });
    }

    selectStatus(status){
        this.elements.filterDropDown().click()
        const value = this.getStatusIndex(status)
        cy.log(value)
        cy.get(':nth-child('+value+') > .check-box > .pointer').click()
        this.elements.saveFilterBtn().click()
        cy.wait(2)
    }

    searchCustomer(keyword,searchTag){
        if(searchTag==="externalId"){
            this.elements.filterDropDown().click()
            this.elements.externalIdSearch().type(keyword)
            this.elements.saveFilterBtn().click()
            cy.wait(1000)
        }else if(searchTag==="name"){
            cy.get('[data-testid="search-input"]').type(keyword)
            cy.wait(1000)
        }
        else{
            this.elements.filterDropDown().click()
            this.elements.customerIdSearch().type(keyword)
            this.elements.saveFilterBtn().click()
            cy.wait(1000)
        }
         
    }

    verifySearchedCustomer(keyword){
        cy.get('table tbody tr').each(($row) => {
            cy.wrap($row)
            // .find('td:nth-child(1)') // Replace with your column selector
            .should('contain.text', keyword);
          });
    }

}
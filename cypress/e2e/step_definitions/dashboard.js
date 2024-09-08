import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {dashboardPage} from "../../pages/index";

const dashboardFunctions = new dashboardPage()

When('users login successfully', () => {
    dashboardFunctions.elements.navigateToApp()
    cy.login("mifos", "password")
})

When('users click on the date filter {int}', (selector) => {
    dashboardFunctions.clickDateFilter(selector)
})

Then('verify dashboard data', () => {
    dashboardFunctions.verifyDashboardData()
})
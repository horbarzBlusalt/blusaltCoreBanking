import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {customersPage} from "../../pages/index";

customerModule = new customersPage()


Then('verify customer page', () => {
    customerModule.verifyCustomerPage()
})

When('users click the side bar toggle button', () => {
    customerModule.clickSideToggle()
})

When('users click the customer module', () =>{
    customerModule.clickCustomerModule()
})

When('users click the blacklisted link', () => {
    customerModule.clickBlackListed()
})

Then('verify only {string} customers are returned', (status) => {
    customerModule.verifyCustomerStatus(status)
})

When('users select {string} status',(status) =>{
    customerModule.selectStatus(status)
})

When('users enter a {string} to search', (keyword) => {
    customerModule.searchCustomer(keyword, "name")
})

Then('it returns details of the {string}',(keyword) => {
    customerModule.verifySearchedCustomer(keyword)
})

When('users enter customer {string} {string} to search', (tag, keyword) => {
    customerModule.searchCustomer(keyword, tag)
})
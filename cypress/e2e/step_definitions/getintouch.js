import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {getintouchPage} from "../../pages/index";
import {utils} from "../../pages/shared/utils";

const utility = new utils()

const getintouchFunctionalities = new getintouchPage()

const country = "Nigeria"

Given('users navigate to the get in touch page', () => {
    getintouchFunctionalities.element.navigateToApp()
})

When('users enter details {string} {string} {string}', (fName, lName,pNum) => {
    const email = fName+lName+utility.getRandomNumber()+"@vph0lgs0.mailosaur.net"
    getintouchFunctionalities.enterDetails(fName,lName,email,pNum,country)

})

When('users enter existing details {string} {string} {string}', (fName, lName,pNum) => {
    const email = fName+lName+"@yopmail.com"
    getintouchFunctionalities.enterDetails(fName,lName,email,pNum,country)

})

When('users click the send button', () => {
    getintouchFunctionalities.clickSendButton()
})

Then('a successfully message is displayed', () =>{
    getintouchFunctionalities.verifySuccessMessage()
})

Then('an error message is displayed', ()=>{
    getintouchFunctionalities.displayErrorMessage()
})

Then('notification error is displayed', ()=> {
    getintouchFunctionalities.displayNotificationToast()
})
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {resetPasswordPage} from "../../pages/index";

const resetPasswordFunctionality = new resetPasswordPage()

When('users click forgot password', () => {
    resetPasswordFunctionality.clickForgotPasswordBtn()
})

Then('users are in the reset password page', () => {
    resetPasswordFunctionality.verifyResetPasswordPage()
})

When('users enter email: {string}', (email) =>{
    resetPasswordFunctionality.enterEmail(email)
})

When('users click on the continue button', () => {
    resetPasswordFunctionality.clickContinueBtn()
})

Then('an error is thrown gracefully', () => {
    resetPasswordFunctionality.verifyInvalidEmailError()
})

When('users enter the token', () => {
    resetPasswordFunctionality.enterToken()
})

Then('token continue button is inactive', ()=>{
    resetPasswordFunctionality.verifyTokenContinueInactive()
})

Then('account not existing error is thrown gracefully',() => {
    resetPasswordFunctionality.accountNotExistError()
})


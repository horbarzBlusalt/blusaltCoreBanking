Feature: Reset Password Feature
    The test is focused on password reset test cases

    Background: Navigate into the app
        Given users navigate to the app
    
     Scenario: Test to ensure when users click forgot password button, they are redirected to the reset password page
        When users click forgot password
        Then users are in the reset password page
    
    Scenario: Test when users provide an invalid email, an error is thrown gracefully
        When users click forgot password
        When users enter email: "<accountToResetPassword>"
        When users click on the continue button
        Then an error is thrown gracefully
        Examples:
        |accountToResetPassword|
        |sammyjay|

     Scenario: Test to ensure users cannot proceed if token is not entered
        When users click forgot password
        When users enter email: "<accountToResetPassword>"
        When users click on the continue button
        Then token continue button is inactive
        Examples:
        |accountToResetPassword|
        |sammyjay@yopmail.com|
    

      Scenario: Test when users provide an account that does not exist, account not existing error is thrown gracefully
        When users click forgot password
        When users enter email: "<accountToResetPassword>"
        When users click on the continue button
        When users enter the token
        When users click on the continue button
        Then account not existing error is thrown gracefully
        Examples:
        |accountToResetPassword|
        |sammyjay@yopmail.com|
    


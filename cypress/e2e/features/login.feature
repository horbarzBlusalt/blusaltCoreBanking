Feature: Authentication Feature
    The test is focused on test cases around authenticating users

    Background: Navigate into the app
        Given users navigate to the app

    Scenario: Test to ensure when users provide valid credentials, login is successful
        When users enter a valid "<email>" and valid "<password>"
        When users click login button
        Then login is successful
        Examples:
        |email|password|
        |mifos|password|
Feature: Authentication Feature
    The test is focused on test cases around authenticating users

    Background: Navigate into the app
        Given users navigate to the app

    Scenario: Test to ensure when users provide valid credentials, login is successful
        When users enter "<email>" and "<password>"
        When users click login button
        Then login is successful
        Examples:
        |email|password|
        |endurance|P@ssword1|
    
    Scenario: Test to ensure when users provide invalid credentials, login returns an error
        When users enter "<email>" and "<password>"
        When users click login button
        Then login returns an error
        Examples:
        |email|password|
        |mifos|pass|
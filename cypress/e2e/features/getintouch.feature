Feature: Get In Touch Feature
    The test is focused on test cases that verifies the get in touch functionality

    Background: Navigate into the app
        Given users navigate to the get in touch page
    
    Scenario: Test to ensure users can send a request to get in touch successfully
        When users enter details "<firstName>" "<lastName>" "<phoneNumber>"
        When users click the send button
        Then a successfully message is displayed
        Examples:
        |firstName|lastName|phoneNumber|
        |Jack|Doe|8175885432|
    
    Scenario: Test to ensure users cannot invite an already invited tenant
        When users enter existing details "<firstName>" "<lastName>" "<phoneNumber>"
        When users click the send button
        Then notification error is displayed
        Examples:
        |firstName|lastName|phoneNumber|
        |Subomi|Kemi|8175885432|

    Scenario: Test to ensure users cannot submit form with empty fields
        When users click the send button
        Then an error message is displayed
    
Feature: Customers Module
    The test is to verify test cases surrounding all customers is successful

    Background: Navigate into the app
        Given users navigate to the app

    Scenario: Test to ensure users can view all customers successfully
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        Then verify customer page 

    Scenario: Test to ensure users can view all blacklisted users successfully
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users click the blacklisted link
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Blacklisted|
    
    Scenario: Test to ensure users can filter by active customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Active|

    Scenario: Test to ensure users can filter by pending customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Pending|


    Scenario: Test to ensure users can filter by transfer on hold customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Transfer on hold|
    
    Scenario: Test to ensure users can filter by transfer in progress customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Transfer in progress|
    
    Scenario: Test to ensure users can filter by rejected customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Rejected|

    Scenario: Test to ensure users can filter by blacklisted customers only
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users select "<status>" status
        Then verify only "<status>" customers are returned
        Examples:
        |status|
        |Blacklisted|

    Scenario: Test to ensure users can search for customers using their name
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users enter a "<keyword>" to search
        Then it returns details of the "<keyword>"
        Examples:
        |keyword|
        |Gowon|
    
    Scenario: Test to ensure users can search for customers using their external Id
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users enter customer "<tag>" "<keyword>" to search
        Then it returns details of the "<keyword>"
        Examples:
        |tag|keyword|
        |externalId|12305|

    Scenario: Test to ensure users can search for customers using their customer Id
        When users login successfully
        When users click the side bar toggle button
        When users click the customer module
        When users enter customer "<tag>" "<keyword>" to search
        Then it returns details of the "<keyword>"
        Examples:
        |tag|keyword|
        |customerId|20238194326521621|
Feature: Authentication Feature
    The test is focused on test cases that validates dashboard data

    Background: Navigate into the app
        Given users navigate to the app
    
    Scenario: Test to ensure users can view the dashboard page successfully
        When users login successfully
        Then verify dashboard data
    
    Scenario: Test to ensure users can filter daily dashboard data
        When users login successfully
        When users click on the date filter <selector>
        Then verify dashboard data
        Examples:
        |selector|
        |0|
    
    Scenario: Test to ensure users can filter weekly dashboard data
        When users login successfully
        When users click on the date filter <selector>
        Then verify dashboard data
        Examples:
        |selector|
        |1|

    Scenario: Test to ensure users can filter monthly dashboard data
        When users login successfully
        When users click on the date filter <selector>
        Then verify dashboard data
        Examples:
        |selector|
        |2|

    Scenario: Test to ensure users can filter biannual dashboard data
        When users login successfully
        When users click on the date filter <selector>
        Then verify dashboard data
        Examples:
        |selector|
        |3|

    Scenario: Test to ensure users can filter annual dashboard data
        When users login successfully
        When users click on the date filter <selector>
        Then verify dashboard data
        Examples:
        |selector|
        |4|



    
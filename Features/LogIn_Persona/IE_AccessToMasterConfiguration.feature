@IE_Accessing_Master_Configuration_Page @ITOps_Milestone_1 @MasterConfiguration

Feature: Login Persona Functionalities

    Scenario Outline:   Installation Engineer is able to access the master configuration page

        Given ITOps "Installation Engineer" is in the home page, "<UserName>", "<Password>"
        When "IE" clicks on edit configuration button
        Then user is taken to the master configuration page "<MasterText>"
        And click on logout button

        Examples:
            | UserName | Password | MasterText           |
            | Itops_IE | qa123    | Master Configuration |


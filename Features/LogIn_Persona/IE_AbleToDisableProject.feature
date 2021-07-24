@IE_Disabling_Project @ITOps_Milestone_1


Feature:Login Persona Functionalities

    Scenario Outline: Installation Engineer is able to disable the project

        Given ITOps "Installation Engineer" is in the home page, "<UserName>", "<Password>"
        When "IE" enters project name in project search feild "<ProjectName>"
        When "IE" click dotmenu icon
        When "IE" clicks on deactivate project
        When "IE" clicks on yes
        Then Success message for Project is "disabled" must be shown as a toaster "<Toaster>"
        And click on logout button

        Examples:
            | UserName | Password | ProjectName      | Toaster                          |
            | Itops_IE | qa123    | Automation_IB_06 | Project Deactivated Successfully |




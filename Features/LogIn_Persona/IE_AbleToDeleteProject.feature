@IE_Deleting_Project @ITOps_Milestone_1


Feature: Login Persona Functionalities

     Scenario Outline: Installation Engineer is able to delete the project

          Given ITOps "Installation Engineer" is in the home page, "<UserName>", "<Password>"
          When "IE" enters project name in project search feild "<projectName>"
          When "IE" click dotmenu icon
          And "IE" click on delete project
          And "IE" clicks on yes
          Then Success message for Project is "deleted" must be shown as a toaster "<Toaster>"
          And click on logout button


          Examples:
               | UserName | Password | projectName      | Toaster                      |
               | Itops_IE | qa123    | Automation_IB_05 | Project Deleted Successfully |




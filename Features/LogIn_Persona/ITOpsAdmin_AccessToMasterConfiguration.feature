@ITOpsAdmin_Accessing_Master_Configuration_Page @ITOps_Milestone_1 @MasterConfiguration

Feature: Login Persona Functionalities

     Scenario Outline: ITOps Admin is able to access the master configuration page

          Given ITOps "Admin" is in the home page, "<UserName>", "<Password>"
          When ITOps "Admin" clicks on edit configuration button
          Then "Admin" is taken to the master configuration page "<MasterText>"
          And click on logout button

          Examples:
               | UserName    | Password | MasterText           |
               | Itops_admin | qa123    | Master Configuration |


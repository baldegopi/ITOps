@CreateQueueChannel_Admin @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel Itops Admin role

    Feature Description Using post method to API we generate Bearer Token

    Scenario Outline: Create Queue Channel
        When "Admin" Creates Queue Channel "<Username>", "<Password>", "<channelName>", "<projectId>", "<projectName>"
        Examples:
            | Username        | Password | channelName    | projectId | projectName   |
            | Itops_admin_new | qa123    | Automation_009 | 978       | Automation_02 |

    Scenario Outline: Verify Queue Channel creation
        Given ITOps "Admin" is in the home page, "<UserName>", "<Password>"
        When "Admin" enters project name in project search feild "<projectName>"
        When "Admin" click dotmenu icon
        When "Admin" click editProject
        When "Admin" clicks on channel configuration
        Then new Queue channel must be available in Channel configuration page "<QueueChannelName>"
        And click on logout button
        Examples:
            | UserName    | Password | QueueChannelName | projectName   |
            | itops_admin | qa123    | Automation_009   | Automation_02 |


@CreateQueueChannel_IE @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel Itops Admin role

    Feature Description Using post method to API we generate Bearer Token

    Scenario Outline: Create Queue Channel
        When "Installation Engineer" Creates Queue Channel "<Username>", "<Password>", "<channelName>", "<projectId>", "<projectName>"
        Examples:
            | Username        | Password | channelName    | projectId | projectName   |
            | Itops_admin_new | qa123    | TestIEChannell | 978       | Automation_02 |


    Scenario Outline: Verify Queue Channel creation
        Given ITOps "IE" is in the home page, "<UserName>", "<Password>"
        When "IE" enters project name in project search feild "<projectName>"
        When "IE" click dotmenu icon
        When "IE" click editProject
        When "IE" clicks on channel configuration
        Then new Queue channel must be available in Channel configuration page "<QueueChannelName>"
        And click on logout button
        Examples:
            | UserName | Password | QueueChannelName | projectName   |
            | Itops_IE | qa123    | TestIEChannell   | Automation_02 |
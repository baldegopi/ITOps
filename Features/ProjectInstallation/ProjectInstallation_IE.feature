@ProjectCreation_IE @ITOps_Milestone_1
Feature: Project Installation with Itops Admin role

        Feature Description Once the login is done with ITOPS_Admin role,
        Admin must be able to create the project and install it.
        Project must be in ready state in Project Listing page.

        @CreateProject
        Scenario Outline: Project Creation
                Given ITOps "Installation Engineer" is in the home page, "<UserName>", "<Password>"
                When "Installation Engineer" clicks on create project button
                And "Installation Engineer" enters project name as "<ProjectName>"
                And "Installation Engineer" enters description as "<Description>"
                And "Installation Engineer" clicks on create button
                Then user is taken to the project configuration page "<Toaster"
                Examples:
                        | UserName | Password | ProjectName   | Description       | Toaster                      |
                        | Itops_IE | qa123    | Automation_IB_08 | Release1.4Project | Project Created Successfully |
        @GeneralConfiguration
        Scenario Outline: General Configuration
                When "Installation Engineer" enters Service now hostname as "<ServiceNowHost>"
                And "Installation Engineer" enters Service now Username as "<ServiceNowUserName>"
                And "Installation Engineer" enters Service now Password as "<ServicenowPassword>"
                And "Installation Engineer" enters Response SLA Threshold Count as "<ThresholdCount>"
                And "Installation Engineer" enters ITSM Name as "<ITSMName>"
                And "Installation Engineer" enters ITSM Version as "<ITSMVersion>"
                And "Installation Engineer" selects ITSM TimeZone as "<ITSMTimeZone>"
                And "Installation Engineer" selects ITOps Flavor as "<ITopsFlavor>"
                And "Installation Engineer" clicks on Save button in General Configuration page
                Then Success message for General Configuration must be shown  as a toaster "<Toaster>"
                Examples:
                        | ServiceNowHost                       | ServiceNowUserName | ServiceNowPassworde | ThresholdCount | ITSMName    | ITSMVersion | ITSMTimeZone | ITopsFlavor | Toaster                        |
                        | https://ustglobaldev.service-now.com | ustglobal          | 1234                | 01.00          | USTTestITSM | 1.01        | IST          | Smart NOC   | Project Configurations Updated |
        @SchedulerConfiguration
        Scenario Outline: Scheduler Configuration
                When "Installation Engineer" clicks on Schedular configuration
                And "Installation Engineer" selects Schedule Interval for Correlation as "<Correlation>"
                And "Installation Engineer" selects Scheduler Interval for auto closure of flap clusters as "<AutoClosure>"
                And "Installation Engineer" select Scheduler Interval for alert analytics as "<AlertAnalytics>"
                And "Installation Engineer" select Scheduled interval for Batch Prediction as "<BatchPrediction>"
                And "Installation Engineer" clicks on Save button in Scheduler Configuration page
                Then Success message for Scheduler Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | Correlation    | AutoClosure    | AlertAnalytics | BatchPrediction | Toaster                        |
                        | Every 4 months | Every 3 months | Every 4 months | Every 6 months  | Project Configurations Updated |

        @ErrorResponseConfiguration
        Scenario Outline: Error Response Configuration
                When "Installation Engineer" clicks on Error Response Configuration
                And "Installation Engineer" enters From Email Account as "<FromEmail>"
                And "Installation Engineer" enters From Email Acount Password as "<FromEmailAcountPassword>"
                And "Installation Engineer" enters To Email Address as "<ToEmailAddress>"
                And "Installation Engineer" clicks on Save button in Error Response Configuration page
                Then Success message for Error Response Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | FromEmail  | Password | ToEmailAddress | Toaster                        |
                        | abc@ib.com | 1234     | def@ib.com     | Project Configurations Updated |
        @SurgeConfiguration
        Scenario Outline: Surge Configuration
                When "Installation Engineer" clicks on Surge Configuration
                And "Installation Engineer" enters Surge Start Percentile as "<StartPercentile>"
                And "Installation Engineer" enters Surge Start Percentile Threshold as "<StartPercentileThreshold>"
                And "Installation Engineer" enters Surge End Percentile as "<EndPercentile>"
                And "Installation Engineer" enters Surge End Percentile Threshold as "<EndPercentileThreshold>"
                And "Installation Engineer" enters Surge Patterns as "<SurgePatterns>"
                And "Installation Engineer" enters Surge Pattern Match Threshold as "<SurgePatternMatchThreshold>"
                And "Installation Engineer" enters Surge Analytics Interval as "<SurgeAnalyticsInterval>"
                And "Installation Engineer" enters Surge First Run Count as "<SurgeFirstRunCount>"
                And "Installation Engineer" enters Surge First Run Count Interval as "<SurgeFirstRunCountInterval>"
                And "Installation Engineer" clicks on Save button in Surge Configuration page
                Then Success message for Surge Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | StartPercentile | StartPercentileThreshold | EndPercentile | EndPercentileThreshold | SurgePatterns | SurgePatternMatchThreshold | SurgeAnalyticsInterval | SurgeFirstRunCount | SurgeFirstRunCountInterval | Toaster                        |
                        | 50              | 50                       | 50            | 50                     | 50            | 50                         | 50                     | 50                 | 50                         | Project Configurations Updated |

        @TicketDumpConfiguration
        Scenario Outline: Ticket Dump Configuration
                When "Installation Engineer" clicks on Ticket Dump Configuration
                And "Installation Engineer" enters Ticket Dump Source Hostname as "<Hostname>"
                And "Installation Engineer" enters Ticket Dump Source File Path as "<FilePath>"
                And "Installation Engineer" enters Source Username as "<SourceUserName>"
                And "Installation Engineer" enters Source Password as "<SourcePassword>"
                And "Installation Engineer" enters Ticket Number Column Name in dump file as "<TicketNumberColumnName>"
                And "Installation Engineer" enters Work Notes column name in column file as "<WorkNotesColumnName>"
                And "Installation Engineer" enters Short Description column name in dump file as "<ShortDescriptionColumnName>"
                And "Installation Engineer" enters Category column name in dump file as "<CategoryColumnName>"
                And "Installation Engineer" enters Sub Category column name in dump file as "<SubCategoryColumnName>"
                And "Installation Engineer" enters Long Description column name in dump file as "<LongDescription>"
                And "Installation Engineer" clicks on Save button in Ticket Dump Configuration page
                Then Success message for Ticket Dump Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | Hostname | FilePath | SourceUserName | SourcePassword | TicketNumberColumnName | WorkNotesColumnName | ShortDescriptionColumnName | CategoryColumnName | SubCategoryColumnName | LongDescription | Toaster                        |
                        | Value1   | Value2   | Value3         | Value1         | Value 2                | Value 3             | Value 1                    | Value 2            | Value 3               | Value           | Project Configurations Updated |
        @ChannelConfiguration
        Scenario Outline: Channel Configuration
                When "Installation Engineer" clicks on Channel Configuration
                And "Installation Engineer" Clicks on create new Channel
                And "Installation Engineer" enter Channel Name "<ChannelName>"
                And "Installation Engineer" Selects channel type as "<ChannelType>"
                And "Installation Engineer" selects channel integration type as "<ChannelIntegration>"
                And "Installation Engineer" enters Email Id as "<EmailId>"
                And "Installation Engineer" enters Client Id as "<ClientID>"
                And "Installation Engineer" enters Client secret Id as "<ClientSecret>"
                And "Installation Engineer" enters Tenant Id as "<TenantID>"
                And "Installation Engineer" Enters Automation story as "<AutomationStory>"
                And "Installation Engineer" clicks on check box
                And "Installation Engineer" enters lIst size as "<ListSize>"
                And "Installation Engineer" clicks on Save and Configure button
                Then Success message for Channel Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | ChannelName | ChannelType | ChannelIntegration | EmailId            | ClientID                             | ClientSecret | TenantID                             | AutomationStory | ListSize | Toaster                      |
                        | UST Channel | EMAIL       | outlook            | ustib123@gmail.com | b73e5fe3-e49a-4d49-9ada-1e8741a6e034 | 1234         | a4431f4b-c207-4733-9530-34c08a9b2b8d | UST             | 2        | Channel created Successfully |

        @EmailChannelAuthentication
        Scenario Outline: Successful Authentication of email channel
                When "Installation Engineer" clicks on authenticate
                And "Installation Engineer" selects account "<MailId>"
                And "Installation Engineer" clicks next
                And "Installation Engineer" enters Password "<Password>"
                And "Installation Engineer" clicks on sign in
                Then Success message for OAuth authentication must be shown as a toaster "<Toaster>"
                Examples:
                        | MailId                         | Password      | Toaster                |
                        | smartopsautosvc@ust-global.com | Support@12334 | Channel Authentication |
        @AddUser
        Scenario Outline: Add User
                When "Installation Engineer" is in Add User page
                And "Installation Engineer" selects user as "<UserName>"
                And "Installation Engineer" selects role as "<Role>"
                And "Installation Engineer" clicks on Add User button
                Then User must be added and listed in the below list with a toaster "<Toaster>"
                Examples:
                        | UserName        | Role        | Toaster     |
                        | Kishor Macharla | itops_admin | User added. |
        @ProjectInstallation
        Scenario Outline: Project Installation
                When "Installation Engineer" clicks on Install button
                Then Project must be in ready state in Project Listring Page "<ProjectStatus>"
                And click on logout button
                Examples:
                        | ProjectStatus |
                        | Ready         |
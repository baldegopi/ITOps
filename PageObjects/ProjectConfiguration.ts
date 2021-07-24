import { ElementFinder, element, by, promise, browser } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();
export class ProjectConfiguration {
    //project details
    txtProjectname = element(by.xpath('//input[@name="pjctName"]'));
    txtDescription = element(by.xpath('//legend[text()="Project Description"]//following::textarea'));
    btnCreate = element(by.xpath('//span[text()="Create"]'));

    //General configuration            
    txtServiceNowHost = element(by.xpath('//legend[text()="Servicenow Host"]//following-sibling::input'));
    txtServiceUsername = element(by.xpath('//legend[text()="Servicenow Username"]//following-sibling::input'));
    pwdServicePassword = element(by.xpath('//legend[text()="Servicenow Password"]//following-sibling::input'));
    txtThresholdCount = element(by.xpath('//legend[text()="Response SLA Threshold Count"]//following-sibling::input'));
    txtITSMname = element(by.xpath('//legend[text()="ITSM Name"]//following-sibling::input'));
    txtITSMversion = element(by.xpath('//legend[text()="ITSM Version"]//following-sibling::input'));
    drpTimeZone = element(by.xpath('//legend[text()="ITSM Time Zone"]//following-sibling::div/span'));
    drpITOPsflavour = element(by.xpath('//legend[text()="ITOps Flavor"]//following-sibling::div/span'));
    btn_saveGeneralConfig = element(by.xpath('//span[text()="Scheduler Configurations "]//preceding::button'));

    //Scheduler configuration 
    lnkSchedularConfiguration = element(by.xpath('//span[text()="Scheduler Configurations "]'));
    drpCorrelationInterval = element(by.xpath('//label[text()="Schedule Interval for Correlation (Use 6-digit cron)"]//following-sibling::section//fieldset//span'));
    drpClusterInterval = element(by.xpath('//label[text()="Scheduler Interval for auto closure of flap clusters (Use 6-digit cron)"]//following-sibling::section//fieldset//span'));
    drpAnalyticsInterval = element(by.xpath('//label[text()="Scheduler Interval for alert analytics"]//following-sibling::section//fieldset//span'));
    drpPredictionInterval = element(by.xpath('//label[text()="Scheduled interval for Batch Prediction"]//following-sibling::section//fieldset//span'));
    btnSaveSchedularConfig = element(by.xpath("//span[text()='Scheduler Configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));

    //Error response ocnfiguration          
    lnkErrorConfiguration = element(by.xpath('//span[text()="Error response configurations "]'));
    txtFromEmail = element(by.xpath('//legend[text()="From Email Account"]//following-sibling::input'));
    pwdFromEmail = element(by.xpath('//legend[text()="From Email Account Password"]//following-sibling::input'));
    txtToEmail = element(by.xpath('//legend[text()="To Email Address"]//following-sibling::input'));
    btnSaveErrorConfig = element(by.xpath("//span[text()='Error response configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));

    //Surge Configuration
    lnkSurgeConfiguration = element(by.xpath('//span[text()="Surge Configurations "]'));
    txtSurgeStartPercentile = element(by.xpath('//legend[text()="Surge Start Percentile"]//following-sibling::input'));
    txtSurgeStartPercentileThreshold = element(by.xpath('//legend[text()="Surge Start Percentile Threshold"]//following-sibling::input'));
    txtSurgeEndPercentile = element(by.xpath('//legend[text()="Surge End Percentile"]//following-sibling::input'));
    txtSurgeEndPercentileThreshold = element(by.xpath('//legend[text()="Surge End Percentile Threshold"]//following-sibling::input'));
    txtSurgePatterns = element(by.xpath('//legend[text()="Surge Patterns"]//following-sibling::input'));
    txtSurgePatternMatchThreshold = element(by.xpath('//legend[text()="Surge Pattern Match Threshold"]//following-sibling::input'));
    txtSurgeAnalyticsInterval = element(by.xpath('//legend[text()="Surge Analytics Interval"]//following-sibling::input'));
    txtSurgeFirstRunCount = element(by.xpath('//legend[text()="Surge First Run Count"]//following-sibling::input'));
    txtSurgeFirstRunCountInterval = element(by.xpath('//legend[text()="Surge First Run Count Interval"]//following-sibling::input'));
    btnSaveSurgeConfig = element(by.xpath("//span[text()='Surge Configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));
    //Ticket Dump Configuratin

    lnkTicketDumpConfiguration = element(by.xpath('//span[text()="Ticket Dump Configurations "]'));
    txtTicketDumpSourceHostname = element(by.xpath('//legend[text()="Ticket Dump Source Hostname"]//following-sibling::input'));
    txtDumpSourceFilePath = element(by.xpath('//legend[text()="Ticket Dump Source File Path"]//following-sibling::input'));
    txtSourceUsername = element(by.xpath('//legend[text()="Source Username"]//following-sibling::input'));
    txtSourcePassword = element(by.xpath('//legend[text()="Source Password"]//following-sibling::input'));
    txtTicketNumberColumnNameInDumpFile = element(by.xpath('//legend[text()="Ticket number column name in dump file"]//following-sibling::input'));
    txtWorkNotesColumnNameInColumnFile = element(by.xpath('//legend[text()="Work Notes column name in dump file"]//following-sibling::input'));
    txtShortDescriptionColumnNameInDumpFile = element(by.xpath('//legend[text()="Short Description column name in dump file"]//following-sibling::input'));
    txtCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Category column name in dump file"]//following-sibling::input'));
    txtSubCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Sub Category column name in dump file"]//following-sibling::input'));
    txtLongDescriptionColumnName = element(by.xpath('//legend[text()="Long Description column name in dump file"]//following-sibling::input'));
    btnSaveTicketConfig = element(by.xpath("//span[text()='Ticket Dump Configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));


    //Channel Configuration

    lnkChannelConfiguration = element(by.xpath('//span[text()="Channel Configuration"]'));
    btnCreateNewChannel = element(by.xpath('//span[text()="Create New Channel"]'));
    txtChannelName = element(by.name('cname'));
    drpChannelType = element(by.xpath('//label[text()="Select Channel type"]'));
    drpChannelIntegrationType = element(by.xpath('//legend[text()="Channel Integration Type"]//following-sibling::div/span'));
    txtEmailId = element(by.xpath("//input[@label='Email ID *']"));
    txtClientId = element(by.xpath("//input[@label='Client ID *']"));
    txtClientSecret = element(by.xpath("//input[@label='Client Secret *']"));
    txtTenantId = element(by.xpath("//legend[text()='Tenant ID *']//following-sibling::input"));
    txtAutomationStory = element(by.xpath("//legend[text()='Automation Story']//following-sibling::input"));
    checkProcessListAsList = element(by.xpath('//input[@label="Automation Story"]//following::label[text()="Process request as list"]'));
    txtEnterListSize = element(by.name("listsize"));
    btnSaveAndConfigure = element(by.xpath('//input[@label="Automation Story"]//following::span[text()="Save & Configure"]'));


    //Channel Authontication
    lnkauthenticate = element(by.xpath('//span[text()="Authenticate"]'));
    txtMailId = element(by.name("loginfmt"));
    btnclickNext = element(by.id("idSIButton9"));
    txtPassword = element(by.name("Password"));
    txtSignIn = element(by.xpath('//span[text()="Sign in"]'))

    //Add User

    lnkAddUser = element(by.xpath('//span[text()="Add User"]'));
    LstSelectUser = element(by.className("smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"));
    txtUserName = element(by.xpath("//input[contains(@class, 'smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1')]"));
    drpSelectUser = element(by.xpath('//h3[text()="Add User"]//following::smo-dropdownitem//span'));
    btnAddUserDetails = element(by.xpath('//h3[text()="Add User"]//following::span[text()="Add User"]'));
    btnInstall = element(by.xpath('//span[text()="INSTALL"]'));




    async Projectname(ProjectName: string) {
        await this.txtProjectname.sendKeys(ProjectName)
    }
    async ProjectDescription(Description: string) {
        await this.txtDescription.sendKeys(Description)
    }

    async Create() {
        await this.btnCreate.click()
    }

    // General Configuration
    async ServiceNowHost(ServiceNowHost: string) {
        await this.txtServiceNowHost.sendKeys(ServiceNowHost)
    }
    async ServiceUsername(serivceUserName: string) {
        await this.txtServiceUsername.sendKeys(serivceUserName)
    }
    async ServicePassword(servicePwd: string) {
        await this.pwdServicePassword.sendKeys(servicePwd)
    }
    async ThresholdCount(ThresholdCount: string) {
        await this.txtThresholdCount.sendKeys(ThresholdCount)
    }
    async ITSMname(TestITSM: string) {
        await this.txtITSMname.sendKeys(TestITSM)
    }
    async ITSMversion(ITSMversion: string) {
        await this.txtITSMversion.sendKeys(ITSMversion)
    }

    async TimeZone(ITSMTimeZone: string) {
        await this.drpTimeZone.click()
        await drp.selectByVisibleText(ITSMTimeZone)
    }
    async ITOPsflavour(ITOpsFlavor: string) {
        await this.drpITOPsflavour.click()
        await drp.selectByVisibleText(ITOpsFlavor)
    }
    async SaveGeneralConfig() {
        await this.btn_saveGeneralConfig.click()
    }
    //Schedular Configuration
    async SchedularConfiguration() {
        await this.lnkSchedularConfiguration.click()
    }
    async CorrelationInterval(Correlation: string) {
        await this.drpCorrelationInterval.click()
        await drp.selectByVisibleText(Correlation)
    }
    async ClusterInterval(AutoClosure: string) {
        await this.drpClusterInterval.click()
        await drp.selectByVisibleText(AutoClosure)
    }
    async AnalyticsInterval(AlertAnalytics: string) {
        await this.drpAnalyticsInterval.click()
        await drp.selectByVisibleText(AlertAnalytics)
    }
    async PredictionInterval(BatchPrediction: string) {
        await this.drpPredictionInterval.click()
        await drp.selectByVisibleText(BatchPrediction)
    }
    async SaveSchedularConfig() {
        await this.btnSaveSchedularConfig.click()
    }

    //Error Response Configuration
    async ErrorResponseConfiguration() {
        await this.lnkErrorConfiguration.click()
    }

    async FromEmail(Frommailid: string) {
        await this.txtFromEmail.sendKeys(Frommailid)
    }
    async PasswordFromEmail(pwdfrommailid: string) {
        await this.pwdFromEmail.sendKeys(pwdfrommailid)
    }
    async ToEmail(ToEmailAddress: string) {
        await this.txtToEmail.sendKeys(ToEmailAddress)
    }
    async SaveErrorConfig() {
        await this.btnSaveErrorConfig.click()
    }
    // Surge Configuration

    async SurgeConfiguration() {
        await this.lnkSurgeConfiguration.click()
    }
    async SurgeStartPercentile(SurgeStartPercentile: string) {
        await this.txtSurgeStartPercentile.sendKeys(SurgeStartPercentile)
    }
    async SurgeStartPercentileThreshold(SurgeStartPercentileThreshold: string) {
        await this.txtSurgeStartPercentileThreshold.sendKeys(SurgeStartPercentileThreshold)
    }
    async SurgeEndPercentile(SurgeEndPercentile: string) {
        await this.txtSurgeEndPercentile.sendKeys(SurgeEndPercentile)
    }
    async SurgeEndPercentileThreshold(SurgeEndPercentileThreshold: string) {
        await this.txtSurgeEndPercentileThreshold.sendKeys(SurgeEndPercentileThreshold)
    }
    async SurgePatterns(SurgePatterns: string) {
        await this.txtSurgePatterns.sendKeys(SurgePatterns)
    }
    async SurgePatternMatchThreshold(SurgePatternMatchThreshold: string) {
        await this.txtSurgePatternMatchThreshold.sendKeys(SurgePatternMatchThreshold)
    }
    async SurgeAnalyticsInterval(SurgeAnalyticsInterval: string) {
        await this.txtSurgeAnalyticsInterval.sendKeys(SurgeAnalyticsInterval)
    }
    async SurgeFirstRunCount(SurgeFirstRunCount: string) {
        await this.txtSurgeFirstRunCount.sendKeys(SurgeFirstRunCount)
    }
    async SurgeFirstRunCountInterval(SurgeFirstRunCountInterval: string) {
        await this.txtSurgeFirstRunCountInterval.sendKeys(SurgeFirstRunCountInterval)
    }
    async SaveSurgeConfiguration() {
        await this.btnSaveSurgeConfig.click()
    }
    //Ticket Dump Configuration 
    async TicketDumpConfiguration() {
        await this.lnkTicketDumpConfiguration.click()
    }

    async TicketDumpSourceHostname(Hostname: string) {
        await this.txtTicketDumpSourceHostname.sendKeys(Hostname)
    }
    async DumpSourceFilePath(filepath: string) {
        await this.txtDumpSourceFilePath.sendKeys(filepath)
    }
    async SourceUsername(SourceUserName: string) {
        await this.txtSourceUsername.sendKeys(SourceUserName)
    }
    async SourcePassword(Upassword: string) {
        await this.txtSourcePassword.sendKeys(Upassword)
    }
    async TicketNumberColumnNameInDumpFile(ColumnName: string) {
        await this.txtTicketNumberColumnNameInDumpFile.sendKeys(ColumnName)
    }
    async WorkNotesColumnNameInColumnFile(columnfile: string) {
        await this.txtWorkNotesColumnNameInColumnFile.sendKeys(columnfile)
    }
    async ShortDescriptionColumnNameInDumpFile(ShortDescription: string) {
        await this.txtShortDescriptionColumnNameInDumpFile.sendKeys(ShortDescription)
    }

    async CategoryColumnNameInDumpFile(CategoryColumnName: string) {
        await this.txtCategoryColumnNameInDumpFile.sendKeys(CategoryColumnName)
    }
    async SubCategoryColumnNameInDumpFile(SubCategory: string) {
        await this.txtSubCategoryColumnNameInDumpFile.sendKeys(SubCategory)
    }
    async LongDescriptionColumnName(SubCategory: string) {
        await this.txtLongDescriptionColumnName.sendKeys(SubCategory)
    }
    async SaveTicketConfig() {
        await this.btnSaveTicketConfig.click()
    }



    //channel Configuration 
    async channelConfiguration() {
        await this.lnkChannelConfiguration.click()
    }
    async CreateNewChannel() {
        await this.btnCreateNewChannel.click()
    }

    async ChannelName(channelName: string) {
        await this.txtChannelName.sendKeys(channelName)
    }
    async channelType(ChannelType: string) {
        await this.drpChannelType.click();
        await drp.selectByVisibleText(ChannelType)
    }

    async ChannelIntegrationType(ChannelIntegration: string) {
        await this.drpChannelIntegrationType.click();
        await drp.selectByVisibleText(ChannelIntegration)
    }

    async EmailId(EmailId: string) {
        await this.txtEmailId.sendKeys(EmailId)
    }

    async ClientId(ClientId: string) {
        await this.txtClientId.sendKeys(ClientId)
    }
    async ClientSecret(ClientId: string) {
        await this.txtClientSecret.sendKeys(ClientId)
    }
    async TenantId(TenantId: string) {
        await this.txtTenantId.sendKeys(TenantId)
    }

    async AutomationStory(AutomationStory: string) {
        await this.txtAutomationStory.sendKeys(AutomationStory)
    }
    async CheckProcessListAsList() {
        await this.checkProcessListAsList.click()
    }
    async EnterListSize(ListSize: string) {
        await this.txtEnterListSize.sendKeys(ListSize)
    }
    async SaveAndConfigure() {
        await this.btnSaveAndConfigure.click()
    }
    //Channel Authontication  
    async ClickOnAuthenticate() {
        await this.lnkauthenticate.click()
    }
    async EnterMailId(MailId: string) {
        await this.txtMailId.sendKeys(MailId)
    }
    async ClickNext() {
        await this.btnclickNext.click()
    }
    async EnterPassword(Password: string) {
        await this.txtPassword.sendKeys(Password)
    }
    async SignIn() {
        await this.txtSignIn.click()
    }

    //Add User
    async AddUser() {
        await this.lnkAddUser.click()
    }
    async SelectUser(UserName) {
        await this.LstSelectUser.click()
        await this.txtUserName.sendKeys(UserName)
        await this.drpSelectUser.click();
    }

    async Role(Role) {
        await drp.CheckBox(Role)
    }
    async AddUserDetails() {
        await this.btnAddUserDetails.click()
    }
    async Install() {
        await this.btnInstall.click()
    }

}

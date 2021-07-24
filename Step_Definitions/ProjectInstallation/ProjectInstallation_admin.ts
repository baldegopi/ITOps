import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from '../../PageObjects/ProjectListing';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();
let objProjectConfi = new ProjectConfiguration();
var customMsgEnabled = true;
var TestProjectName;

Given('ITOps {string} is in the home page, {string}, {string}', async function (userRole, usernameData, passwordData) {
  try {
    await browser.get(properties.get("main." + globalThis.environment + "_url")).then(async function () {
    })
    await objLogIn.LogIn_Details(usernameData, passwordData)
  }
  catch (error) {
    throw "User is not taken to ITops home page"
  }
});

// Project Details

When('{string} clicks on create project button', async function (userRole) {
  try {
    await objProjectListing.ClickOnProjectCreateButton();
  }
  catch (error) {
    throw "User is not able to click on Create Project Button"
  }
});

When('{string} enters project name as {string}', async function (userRole, ProjectName) {
  try {
    await objProjectConfi.Projectname(ProjectName)
    TestProjectName = ProjectName;

  }
  catch (error) {
    throw "User is not able to enter Project Name"
  }
});

When('{string} enters description as {string}', async function (userRole, Description) {
  try {
    await objProjectConfi.ProjectDescription(Description)
  }
  catch (error) {
    throw "User is not able to enter Project Description"
  }
});

When('{string} clicks on create button', async function (userRole) {
  try {
    await objProjectConfi.Create()
  }
  catch (error) {
    throw "User is not able to click on create button"
  }
});

Then('user is taken to the project configuration page {string}', async function (Toaster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toaster);
    });
  }
  catch (error) {
    throw "User is unable to proceed with project configuration"
  };
});

// General Configuration

When('{string} enters Service now hostname as {string}', async function (userRole, ServiceNowHost) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectConfi.ServiceNowHost(ServiceNowHost)
  }
  catch (error) {
    throw "User is not able to enter Service now Host"
  }
});

When('{string} enters Service now Username as {string}', async function (userRole, ServiceNowUserName) {
  try {
    await objProjectConfi.ServiceUsername(ServiceNowUserName)
  }
  catch (error) {
    throw "User is not able to enter Service now Username"
  }
});

When('{string} enters Service now Password as {string}', async function (userRole, ServicenowPassword) {
  try {
    await objProjectConfi.ServicePassword(ServicenowPassword)
  }
  catch (error) {
    throw "User is not able to enter Service now Password"
  }
});

When('{string} enters Response SLA Threshold Count as {string}', async function (userRole, ThresholdCount) {
  try {
    await objProjectConfi.ThresholdCount(ThresholdCount)
  } catch (error) {
    throw "User is not able to enter Response SLA Threshold Count"
  }
});

When('{string} enters ITSM Name as {string}', async function (userRole, ITSMName) {
  try {
    await objProjectConfi.ITSMname(ITSMName)
  }
  catch (error) {
    throw "User is not able to enter ITSM Name"
  }
});

When('{string} enters ITSM Version as {string}', async function (userRole, ITSMVersion) {
  try {
    await objProjectConfi.ITSMversion(ITSMVersion)
  }
  catch (error) {
    throw "User is not able to enter ITSM Version"
  }
});

When('{string} selects ITSM TimeZone as {string}', async function (userRole, ITSMTimeZone) {
  try {
    var myElement = objProjectConfi.drpTimeZone;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.TimeZone(ITSMTimeZone)
  }
  catch (error) {
    throw "User is not able to select ITSM TimeZone"
  }
});

When('{string} selects ITOps Flavor as {string}', async function (userRole, ITIopsFlavor) {
  try {
    await objProjectConfi.ITOPsflavour(ITIopsFlavor)
  }
  catch (error) {
    throw "User is not able to select ITSM Flavour"
  }
});

When('{string} clicks on Save button in General Configuration page', async function (userRole) {
  try {
    await objProjectConfi.SaveGeneralConfig()
  }
  catch (error) {
    throw "User is not able to click on save Button"
  }
});

Then('Success message for General Configuration must be shown  as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  }
  catch (error) {
    throw "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  }
});

// Schedular configuration

When('{string} clicks on Schedular configuration', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    var myElement = objProjectConfi.lnkSchedularConfiguration;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objProjectConfi.SchedularConfiguration()
  }
  catch (error) {
    throw "User is not able to click on Surgical Configuration"
  }
});

When('{string} selects Schedule Interval for Correlation as {string}', async function (userRole, Correlation) {
  try {
    await browser.wait(EC.visibilityOf(objProjectConfi.drpCorrelationInterval), 100000);
    await objProjectConfi.CorrelationInterval(Correlation)
  }
  catch (error) {
    throw "User is not able to select Schedule for Correlation"
  }
});

When('{string} selects Scheduler Interval for auto closure of flap clusters as {string}', async function (userRole, AutoClosure) {
  try {
    var myElement = element(by.xpath('//span[text()="Concurrency"]'));
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await browser.wait(EC.visibilityOf(objProjectConfi.drpClusterInterval), 100000);
    await objProjectConfi.ClusterInterval(AutoClosure)

  }
  catch (error) {
    throw "User is not able to select Schedular Interval for auto closure of flap clusters"
  }
});

When('{string} select Scheduler Interval for alert analytics as {string}', async function (userRole, AlertAnalytics) {
  try {
    await browser.wait(EC.visibilityOf(objProjectConfi.drpAnalyticsInterval), 100000);
    await objProjectConfi.AnalyticsInterval(AlertAnalytics)
  }
  catch (error) {
    throw "User is not able to select Schedular Interval for alert analytics"
  }
});

When('{string} select Scheduled interval for Batch Prediction as {string}', async function (userRole, BatchPrediction) {
  try {
    await browser.wait(EC.visibilityOf(objProjectConfi.drpPredictionInterval), 100000);
    await objProjectConfi.PredictionInterval(BatchPrediction)
  }
  catch (error) {
    throw "User is not able to select Scheduled Interval for Batch Prediction"
  }
});

When('{string} clicks on Save button in Scheduler Configuration page', async function (userRole) {
  try {
    await objProjectConfi.SaveSchedularConfig()
  }
  catch (error) {
    throw "User is not able to click on Save button"
  }
});

Then('Success message for Scheduler Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  };
});
// Error Response Configuration

When('{string} clicks on Error Response Configuration', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.ErrorResponseConfiguration()
    })

  }
  catch (error) {
    throw "User is not able to click on Error Response Configuration"
  }
});

When('{string} enters From Email Account as {string}', async function (userRole, FromEmail) {
  try {
    await objProjectConfi.FromEmail(FromEmail)
  }
  catch (error) {
    throw "User is not able to enter From Email Account"
  }
});

When('{string} enters From Email Acount Password as {string}', async function (userRole, FromEmailAcountPassword) {
  try {
    await objProjectConfi.PasswordFromEmail(FromEmailAcountPassword)
  }
  catch (error) {
    throw "User is not able to enter From Emai Account Password"
  }
});

When('{string} enters To Email Address as {string}', async function (userRole, ToEmail) {
  try {
    await objProjectConfi.ToEmail(ToEmail)
  }
  catch (error) {
    throw "User is not able to enter To Email Address"
  }
});

When('{string} clicks on Save button in Error Response Configuration page', async function (userRole) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.SaveErrorConfig()
    })
  }
  catch (error) {
    throw "User is not able to click on Save Button"
  }
});

Then('Success message for Error Response Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  };
});

// Surge Configuration

When('{string} clicks on Surge Configuration', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectConfi.SurgeConfiguration()
  }
  catch (error) {
    throw "User is not able to click on Surge Configuration"
  }
});

When('{string} enters Surge Start Percentile as {string}', async function (userRole, StartPercentile) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.SurgeStartPercentile(StartPercentile)
    })
  }
  catch (error) {
    throw "User is not able to enter Surge Start Percentile"
  }
});

When('{string} enters Surge Start Percentile Threshold as {string}', async function (userRole, StartPercentileThreshold) {
  try {
    await objProjectConfi.SurgeStartPercentileThreshold(StartPercentileThreshold)
  }
  catch (error) {
    throw "User is not able to enter Surge Start Percentile Threshold"
  }
});

When('{string} enters Surge End Percentile as {string}', async function (userRole, EndPercentile) {
  try {
    await objProjectConfi.SurgeEndPercentile(EndPercentile)
  }
  catch (error) {
    throw "User is not able to enter Surge End Percentile"
  }
});

When('{string} enters Surge End Percentile Threshold as {string}', async function (userRole, EndPercentileThreshold) {
  try {
    await objProjectConfi.SurgeEndPercentileThreshold(EndPercentileThreshold)
  }
  catch (error) {
    throw "User is not able to enter Surge End Percentile Threshold"
  }
});

When('{string} enters Surge Patterns as {string}', async function (userRole, SurgePatterns) {
  try {
    await objProjectConfi.SurgePatterns(SurgePatterns)
  }
  catch (error) {
    throw "User is not able to enter Surge Patterns"
  }
});

When('{string} enters Surge Pattern Match Threshold as {string}', async function (userRole, SurgePatternMatchThreshold) {
  try {
    await objProjectConfi.SurgePatternMatchThreshold(SurgePatternMatchThreshold)
  }
  catch (error) {
    throw "User is not able to enter Surge Patterns Match Threshold"
  }
});

When('{string} enters Surge Analytics Interval as {string}', async function (userRole, SurgeAnalyticsInterval) {
  try {
    await objProjectConfi.SurgeAnalyticsInterval(SurgeAnalyticsInterval)
  }
  catch (error) {
    throw "User is not able to enter Surge Analytics Interval"
  }
});

When('{string} enters Surge First Run Count as {string}', async function (userRole, SurgeFirstRunCount) {
  try {
    await objProjectConfi.SurgeFirstRunCount(SurgeFirstRunCount)
  }
  catch (error) {
    throw "User is not able to enter Surge First Run Count"
  }
});

When('{string} enters Surge First Run Count Interval as {string}', async function (userRole, SurgeFirstRunCountInterval) {
  try {
    await objProjectConfi.SurgeFirstRunCountInterval(SurgeFirstRunCountInterval)
  }
  catch (error) {
    throw "User is not able to enter Surge First Run Count Interval"
  }
});

When('{string} clicks on Save button in Surge Configuration page', async function (userRole) {
  try {
    await objProjectConfi.SaveSurgeConfiguration()
  }
  catch (error) {
    throw "User is not able to enter Save Button"
  }
});

Then('Success message for Surge Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  }
});

// Ticket Dump Configuration

When('{string} clicks on Ticket Dump Configuration', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectConfi.TicketDumpConfiguration()
  }
  catch (error) {
    throw "User is not able to click on Ticket Dump Configuration"
  }
});

When('{string} enters Ticket Dump Source Hostname as {string}', async function (userRole, Hostname) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.TicketDumpSourceHostname(Hostname)
    })
  }
  catch (error) {
    throw "User is not able to enter Ticket Dump Source Hostname"
  }
});

When('{string} enters Ticket Dump Source File Path as {string}', async function (userRole, FilePath) {
  try {
    await objProjectConfi.DumpSourceFilePath(FilePath)
  }
  catch (error) {
    throw "User is not able to enter Ticket Dump Source File Path"
  }
});

When('{string} enters Source Username as {string}', async function (userRole, SourceUsername) {
  try {
    await objProjectConfi.SourceUsername(SourceUsername)
  }
  catch (error) {
    throw "User is not able to enter Source Username"
  }
});

When('{string} enters Source Password as {string}', async function (userRole, SourcePassword) {
  try {
    await objProjectConfi.SourcePassword(SourcePassword)
  }
  catch (error) {
    throw "User is not able to enter Source Password"
  }
});

When('{string} enters Ticket Number Column Name in dump file as {string}', async function (userRole, TicketNumberColumnName) {
  try {
    await objProjectConfi.TicketNumberColumnNameInDumpFile(TicketNumberColumnName)
  }
  catch (error) {
    throw "User is not able to enter Ticket Number Name in dump file"
  }
});

When('{string} enters Work Notes column name in column file as {string}', async function (userRole, WorkNotesColumnName) {
  try {
    await objProjectConfi.WorkNotesColumnNameInColumnFile(WorkNotesColumnName)
  }
  catch (error) {
    throw "User is not able to enter Work Notes column name in column file"
  }
});

When('{string} enters Short Description column name in dump file as {string}', async function (userRole, ShortDescriptionColumnName) {
  try {
    await objProjectConfi.ShortDescriptionColumnNameInDumpFile(ShortDescriptionColumnName)
  }
  catch (error) {
    throw "User is not able to Short Description column name in dump file"
  }
});

When('{string} enters Category column name in dump file as {string}', async function (userRole, CategoryColumnName) {
  try {
    await objProjectConfi.CategoryColumnNameInDumpFile(CategoryColumnName)
  }
  catch (error) {
    throw "User is not able to enter Category column name in dump file"
  }
});

When('{string} enters Sub Category column name in dump file as {string}', async function (userRole, SubCategoryColumnName) {
  try {
    await objProjectConfi.SubCategoryColumnNameInDumpFile(SubCategoryColumnName)
  }
  catch (error) {
    throw "User is not able to enter Sub Category column name in dump file"
  }
});

When('{string} enters Long Description column name in dump file as {string}', async function (userRole, LongDescription) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.LongDescriptionColumnName(LongDescription)
    })
  }
  catch (error) {
    throw "User is not able to enter Long Description column name in dump file"
  }
})

When('{string} clicks on Save button in Ticket Dump Configuration page', async function (userRole) {
  try {
    await objProjectConfi.SaveTicketConfig()
  }
  catch (error) {
    throw "User is not able to click on Save button"
  }
});

Then('Success message for Ticket Dump Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Once user clicks save button it should display Project Configurations Updated. But it is not displaying the message"
  }
});

// Channel Configuration

When('{string} clicks on Channel Configuration', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await browser.executeScript('window.scrollTo(0,0);').then(async function () {
    });
    await objProjectConfi.channelConfiguration()
  }
  catch (error) {
    throw "User is not able to click on Channel Configuration"
  }
});

When('{string} Clicks on create new Channel', async function (userRole) {
  try {
    await objProjectConfi.CreateNewChannel()
  }
  catch (error) {
    throw "User is not able to click on Create New Channel button"
  }
});

When('{string} enter Channel Name {string}', async function (userRole, ChannelName) {
  try {
    await objProjectConfi.ChannelName(ChannelName)
  }
  catch (error) {
    throw "User is not able to enter Channel Name"
  }
});

When('{string} Selects channel type as {string}', async function (userRole, ChannelType) {
  try {
    await objProjectConfi.channelType(ChannelType)
  }
  catch (error) {
    throw "User is not able to select channel type"
  }
});

When('{string} selects channel integration type as {string}', async function (userRole, ChannelIntegration) {
  try {
    await objProjectConfi.ChannelIntegrationType(ChannelIntegration)
  }
  catch (error) {
    throw "User is not able to select integration type"
  }
});

When('{string} enters Email Id as {string}', async function (userRole, EmailId) {
  try {
    await objProjectConfi.EmailId(EmailId)
  }
  catch (error) {
    throw "User is not able to enter Email ID"
  }
});

When('{string} enters Client Id as {string}', async function (userRole, ClientID) {
  try {
    await objProjectConfi.ClientId(ClientID)
  }
  catch (error) {
    throw "User is not able to enter Client ID"
  }
});

When('{string} enters Client secret Id as {string}', async function (userRole, ClientSecret) {
  try {
    await objProjectConfi.ClientSecret(ClientSecret)
  }
  catch (error) {
    throw "User is not able to enter Client secret ID"
  }
});

When('{string} enters Tenant Id as {string}', async function (userRole, TenantID) {
  try {
    await objProjectConfi.TenantId(TenantID)
  }
  catch (error) {
    throw "User is not able to enter Tenant ID"
  }
});

When('{string} Enters Automation story as {string}', async function (userRole, AutomationStory) {
  try {
    await objProjectConfi.AutomationStory(AutomationStory)
  }
  catch (error) {
    throw "User is not able to enter Automation Story"
  }
});

When('{string} clicks on check box', async function (userRole) {
  try {
    await objProjectConfi.CheckProcessListAsList()
  }
  catch (error) {
    throw "User is not able to click the check box"
  }
});

When('{string} enters lIst size as {string}', async function (userRole, ListSize) {
  try {
    await objProjectConfi.EnterListSize(ListSize)
  }
  catch (error) {
    throw "User is not able to enter List size"
  }
});

When('{string} clicks on Save and Configure button', async function (userRole) {
  try {
    await objProjectConfi.SaveAndConfigure()
  }
  catch (error) {
    throw "User is not able to click on save button"
  }
});

Then('Success message for Channel Configuration must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Success message for authentication Channel popup is not displaying"
  }
});

When('{string} clicks on authenticate', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectConfi.ClickOnAuthenticate();
  }
  catch (error) {
    throw "User is not able to click on Authenticate button"
  }
});

When('{string} selects account {string}', async function (userRole, EmailId) {
  try {
    await objProjectConfi.EnterMailId(EmailId);
  }
  catch (error) {
    throw "User is not able to select account"
  }
});

When('{string} clicks next', async function (userRole) {
  try {
    await objProjectConfi.ClickNext();
  }
  catch (error) {
    throw "User is not able to click on Next button"
  }
});

When('{string} enters Password {string}', async function (userRole, Password) {
  try {
    await browser.wait(EC.visibilityOf(element(by.name("Password"))), 100000);
    await objProjectConfi.EnterPassword(Password);
  }
  catch (error) {
    throw "User is not able to enter password"
  }
});

When('{string} clicks on sign in', async function (userRole) {
  try {
    await objProjectConfi.SignIn();
  }
  catch (error) {
    throw "User is not able to click on sign in button"
  }
});

Then('Success message for OAuth authentication must be shown as a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Success message for OAuth authentication is not displaying"
  }
});

//AddUser

When('{string} is in Add User page', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectConfi.AddUser();

    // await element(by.className("smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon")).click();
    // await element(by.className('ng-tns-c18-13 smo-dropdown-filter smo-inputtext smo-widget smo-state-default pl-1')).sendKeys("Kishor Mac");
    // await element(by.xpath('//h3[text()="Add User"]//following::smo-dropdownitem//span')).click();
  }
  catch (error) {
    throw "User should taken to Add User page"
  }
});

When('{string} selects user as {string}', async function (userRole, UserName) {
  try {
    await objProjectConfi.SelectUser(UserName);
  }
  catch (error) {
    throw "User is not able to select user"
  }
});

When('{string} selects role as {string}', async function (userRole, Role) {
  try {
    await objProjectConfi.Role(Role);
  }
  catch (error) {
    throw "User is not able to select role"
  }
});

When('{string} clicks on Add User button', async function (userRole) {
  try {
    await objProjectConfi.AddUserDetails();
  }
  catch (error) {
    throw "User is not able to click on Add User Button"
  }
});

Then('User must be added and listed in the below list with a toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
  } catch (error) {
    throw "Once user clicks Add User button it should display selected user name in the list. But it is not displaying in the list"
  }
});

//ProjectInstallation

When('{string} clicks on Install button', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objProjectConfi.Install()
    })
  }
  catch (error) {
    throw "User is not able to click on Install Button"
  }
});

Then('Project must be in ready state in Project Listring Page {string}', async function (ProjectStatus) {
  try {
    await objProjectListing.Project_search(TestProjectName);
    await browser.sleep(2000);
    await element(by.className("smo-badge smo-badge-round smo-badge-sm smo-badge-ready-sm")).getText().then(async function (text) {
      await expect(text).to.include(ProjectStatus);
      await console.log(text);
    });
  }
  catch (error) {
    throw "Once project is installed, Ready should be display as status opposite to project name in the list. But it is not displaying in the list"
  }
});
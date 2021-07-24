import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objProjectListing = new ProjectListingPage();
var JsonAlert;
var StringifiedJsonAlert;
var Global_ProjectName;


Given('User opens rabbitMQ', async function () {
  try {
    await browser.get(properties.get("main." + globalThis.environment + "_rabit_MQ_URL")).then(async function () {
    })
  }
  catch (error) {
    throw "User is unable to open rabbitMQ page"
  }
})

When('user enters Username and Password {string}, {string}', async function (rabbitMQ_User, rabbitMQ_Password) {
  try {
    await objFilter.LogIn_Details2(rabbitMQ_User, rabbitMQ_Password);
  }
  catch (error) {
    throw "user is unable to enter Username and Password"
  }
});

When('user clicks on Login button', async function () {
  try {
    await objFilter.ClickOnRabbitMQSignIn();
  }
  catch (error) {
    throw "User is not able to login into the rabbitMQ page"
  }
});

When('user clicks on the project {string} {string}', async function (ProjectName, ProjectNameForAlert) {
  try {
    await objFilter.filter(ProjectName);
    Global_ProjectName = ProjectName;
    await objFilter.checkbox();
    await objFilter.clickOnProject(ProjectNameForAlert);
  }
  catch (error) {
    throw "User is not able to select the project to push the alert"
  }
});

When('user enters to the queue {string}', async function (ToQueue) {

  try {
    await browser.executeScript('window.scrollTo(0,800);').then(async function () {
    });
    await objFilter.clickOnBindings();
    await objFilter.enterToQueue(ToQueue);
  }
  catch (error) {
    throw "User is not able to enter the channel name in to queue"
  }
});

When('user enters the routing key {string}', async function (RouteKey) {
  try {
    await objFilter.clickOnPublishMessage();
    await objFilter.enterRoutingKey(RouteKey);
  }
  catch (error) {
    throw "User is not able to enter the channel name in to routing key"
  }
});

When('datatojson {string} {string} {string}', async function (AlertName, NodeIPAddress, ObjectName) {
  try {
    JsonAlert = {
      "Alert Name": AlertName,
      "Alert Message": "1 of 2 Interface ha1 in CNHKGG-00A-SSC1 is Shutdown",
      "Alert Severity": "Major",
      "Service Name": "Node Down",
      "Node Name": "CNHKGG-00A-SSC1",
      "NodeIP Address": NodeIPAddress,
      "Object Type": "Access Point",
      "ObjectName": ObjectName,
      "ObjectStatus": "down",
      "Alert Details URL": "https://GalacticStar405.abc.app.com:443/Orion/NetPerfMon/NodeDetails.aspx?NetObject=N:4049",
      "Resource Type": "Console",
      "Alert time": ""
    }
    StringifiedJsonAlert = JSON.stringify(JsonAlert);
  }
  catch (error) {
    throw "User is not able to chnage json to string"
  }

});

When('user enters the payload', async function () {
  try {
    await objFilter.enterPayLoad(StringifiedJsonAlert);
  }
  catch (error) {
    throw "User is not able to enter the json alert into the payload"
  }

});

When('user clicks on publish', async function () {
  try {
    await objFilter.clickOnPublish();
  }
  catch (error) {
    throw "User is not able to publish the message"
  }
});

When('user opens itops application', async function () {
  try {
    await browser.get(properties.get("main." + globalThis.environment + "_url")).then(async function () {
    })
  }
  catch (error) {
    throw "User is not able to to open the ITOps URL"
  }
});

When('{string} enters Username, Password and click on Login button {string}, {string}', async function (userRole, UserName, Password) {
  await objLogIn.LogIn_Details(UserName, Password);
});

When('{string} selects project and open alerts', async function (userRole) {

  try {
    await objProjectListing.Project_search(Global_ProjectName);
    await browser.sleep(3000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()=" ' + Global_ProjectName + ' "]'))), 100000);
    await objProjectListing.selectProject(Global_ProjectName);
    await browser.wait(EC.visibilityOf(element(by.xpath('//a[text()="Alerts"]'))), 100000);
    await objAlerts.selectAlerts();
  }
  catch (error) {
    throw "Admin is not able to open the alerts page in the dashboard"
  }
})

Then('Success message for alerts displayed in Alerts console {string} {string}', async function (Alerts, alertName) {
  try {
    await objAlerts.Alert_Search(alertName);
    await element(by.xpath('//span[text()="Alert Name"]//following::td[6]//span')).getText().then(function (text) {
      expect(text).to.include(Alerts);
    });
  } catch (error) {
    throw "Unable to find the pushed alert"
  };
});
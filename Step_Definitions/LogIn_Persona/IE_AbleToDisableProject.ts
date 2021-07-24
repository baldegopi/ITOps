import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, protractor, ExpectedConditions, WebElement } from "protractor"
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
var Global_ProjectName;

When('{string} click on three dots of a project', async function (userRole, string) {
  await objProjectListing.ThreeDots(Global_ProjectName);
});


When('{string} clicks on deactivate project', async function (userRole) {
  await objProjectListing.Deactivate();
});

When('{string} clicks on yes', async function (userRole) {
  await objProjectListing.ClickOnYes();
});
Then('Success message for Project is {string} must be shown as a toaster {string}', async function (userRole, Toaster) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Toaster);
  });
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
});
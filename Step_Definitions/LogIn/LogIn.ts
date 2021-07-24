import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from "../../PageObjects/ProjectListing";


var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;

let objLogIn = new LogIn();
let ProjectListing = new ProjectListingPage();


Given('User with ITOps role renders the URL', async function () {
  await browser.get(properties.get("main." + globalThis.environment + "_url")).then(async function () {
  })
})

When('user enters Username, Password and click on Login button {string}, {string}', async function (UserName, Password) {
  try {
    await objLogIn.LogIn_Details(UserName, Password);
  } catch (error) {
    await ProjectListing.ClickOnProfile()
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 100000);
    await ProjectListing.LogOut();
    throw "Invalid Login credentials"

  }
});



Then('ITOps home page is displayed', async function () {
  await browser.getTitle().then(async function (txtTitle) {
    await expect(txtTitle).to.include('Itops');
  });
})

When('click on logout button', async function () {
  await ProjectListing.ClickOnProfile();
  await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
  await ProjectListing.LogOut();
  await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
})

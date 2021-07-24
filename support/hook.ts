
import { After, AfterAll, Before, BeforeAll, Status } from "cucumber";
// import { browser } from "protractor";
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import { ProjectListingPage } from "../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
let ProjectListing = new ProjectListingPage();


//screenshots for scenarios

After(async function (scenario) {

  if (scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");

  }
  else
    if (scenario.result.status === Status.PASSED) {
      if (properties.get('main.Required_screenshot') == true) {
        const screenshot = await browser.takeScreenshot();

        this.attach(screenshot, "image/png");
      }
    }
  // if (scenario.result.status === Status.FAILED) {
  //   await ProjectListing.ClickOnProfile();
  //   await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
  //   await ProjectListing.LogOut();
  //   await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
  // }

});





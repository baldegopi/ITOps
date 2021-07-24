import { ElementFinder, element, by, browser } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();



export class PushingAlerts {



  txtUserName = element(by.name("username"));
  txtPassword = element(by.name("password"));
  btnClickOnSignIn = element(by.xpath('//input[@value="Login"]'));
  btnfilter = element(by.xpath('//input[@type="text"]'));
  btncheckbox = element(by.xpath('//input[@type="checkbox"]'));
  btnclickOnBindings = element(by.xpath('//h2[text()="Bindings"]'));
  btnenterToQueue = element(by.xpath('//h3[text()="Add binding from this exchange"]//following::input[@type="text"]'));
  btnclickOnPublishMessage = element(by.xpath('//h2[text()="Publish message"]'));
  btnenterRoutingKey = element(by.xpath('//h2[text()="Publish message"]//following::input[@name="routing_key"]'));
  btnenterPayLoad = element(by.xpath('//textarea[@name="payload"]'));
  btnclickOnPublish = element(by.xpath('//input[@value="Publish message"]'))

  async LogIn_Details2(adminUserName: string, adminPassword: string) {
    await this.txtUserName.sendKeys(adminUserName)
    await this.txtPassword.sendKeys(adminPassword)
  }
  async ClickOnRabbitMQSignIn() {
    await this.btnClickOnSignIn.click();
  }
  async filter(ProjectName: string) {
    await this.btnfilter.sendKeys(ProjectName);
  }
  async checkbox() {
    await this.btncheckbox.click();
  }
  async clickOnProject(ProjectNameForAlert) {
    await element(by.xpath('//a[text()="' + ProjectNameForAlert + '"]')).click();

  }
  async clickOnBindings() {
    await this.btnclickOnBindings.click();
  }
  async enterToQueue(ToQueue: string) {
    await this.btnenterToQueue.sendKeys(ToQueue);
  }
  async clickOnPublishMessage() {
    await this.btnclickOnPublishMessage.click();
  }
  async enterRoutingKey(RouteKey: string) {
    await this.btnenterRoutingKey.sendKeys(RouteKey);
  }
  async enterPayLoad(data1) {
    await this.btnenterPayLoad.sendKeys(data1);
  }
  async clickOnPublish() {
    await this.btnclickOnPublish.click();
  }

}

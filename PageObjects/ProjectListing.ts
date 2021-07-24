import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class ProjectListingPage {
  txtsearch = element(by.xpath('//input[@placeholder="Search"]'));
  btnClickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
  btnProfile = element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2"));
  // btnEditConfiguration = element(by.xpath('//span[text()="Edit Configuration"]'));
  btnEditConfiguration = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-edit-regular smo-clickable smo-flex-order-one smo-button-icon-left ng-star-inserted'));
  btnDeleteProject = element(by.xpath('//span[text()="Delete Project"]'));
  btnDeactivateProject = element(by.xpath('//span[text()="Deactivate Project"]'));
  btnClickOnYes = element(by.xpath('//span[@class="smo smo-close-black-alt"]//following::span[text()="Yes"]'));
  btnDeactivate = element(by.xpath('//span[text()="Deactivate Project"]'));
  editProject = element(by.xpath('//span[text()="Edit Project"]'));
  btnLogOut = element(by.xpath('//span[text()="Logout"]'));


  async Project_search(ProjectName: string) {
    await this.txtsearch.sendKeys(ProjectName);
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();

  }
  async ClickOnProjectCreateButton() {
    await this.btnClickOnCreateProject.click();
  }
  async ClickOnProfile() {
    await this.btnProfile.click();
  }
  async EditConfiguration() {
    await this.btnEditConfiguration.click();
  }
  async DeleteProject() {
    await this.btnDeleteProject.click();
  }
  async DeactivateProject() {
    await this.btnDeactivateProject.click();
  }
  async ClickOnYes() {
    await this.btnClickOnYes.click();
  }
  async Deactivate() {
    await this.btnDeactivate.click();
  }
  async selectProject(ProjectName) {
    await element(by.xpath('//h3[text()=" ' + ProjectName + ' "]')).click();
  }

  async ThreeDots(ProjectName) {
    await element(by.xpath('//h3[text()=" ' + ProjectName + ' "]//following::span[@class="smo smo-more-vert-24px ellipsis-icon font-14 cursor-pt secondary-color default-icon context-menu-icon"]')).click();
  }

  async EditProject() {
    await this.editProject.click();
  }
  async LogOut() {
    await this.btnLogOut.click();
  }
}

import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var drp = new support();
var expect = chai.expect;
export class AlertsPage {
 
  btnselectAlerts = element(by.xpath('//a[text()="Alerts"]'));
  btnsearch = element(by.xpath('//input[@placeholder="Search"]'))
  btnAdvanceFilter = element(by.className('filter smo smo-filter'));
  drpSource = element(by.xpath('//label[text()="Source"]'));
  drpAlertState = element(by.xpath('//label[text()="Alert State"]'));
  txtResource = element(by.name('resourceName'));
  btnSaveFilter = element(by.className('d-flex justify-content-end save-link ng-star-inserted'));
  txtInLast = element(by.name('inLast'));
  drpSelectDurationType =  element(by.xpath('//label[text()="Select"]'));
  txtFilterName = element(by.xpath('//input[@name="name"]'));
  txtFilterDescription = element(by.xpath('//textarea[@name="description"]'));
  drpSavedFilter = element(by.xpath('//label[text()="Saved Filter"]'));
  btnRemoveAll = element(by.xpath('//a[text()="Remove All"]'));
  btnRemoveSourceCondition = element(by.xpath('//span[text()="State"]//preceding::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveStateCondition = element(by.xpath('//span[text()="State"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  chkMakeAsDefault = element(by.xpath('//span[text()="Make As Default"]//preceding::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'));
  btnEditSavedFilter = element(by.className('mr-3 smo smo-edit ng-star-inserted'));
  btnDeleteSavedFilter = element(by.className('smo smo-trash-alt-regular ng-star-inserted'));
  btnSavedFileter = element(by.xpath('//span[text()="IB"]'));
  btnApply = element(by.xpath('//span[text()="Apply"]'));
  btnSave_Apply = element(by.xpath('//span[text()="Save and Apply"]'));
  btnUpdateAndApply = element(by.xpath('//span[text()="Update and Apply"]'));
  btnYesConfirmation = element(by.xpath('//span[text()="Yes"]'));
  txtNoDataAvailable = element(by.xpath('//span[text()="No data available"]'));
  async selectAlerts() {
    await this.btnselectAlerts.click();
  }
  async Alert_Search(alertName: string) {
    await this.btnsearch.sendKeys(alertName);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();

  }
  async AdvanceFilter() {
    await this.btnAdvanceFilter.click();
  }
  async SelectSource(Source) {
    await this.drpSource.click()
    await drp.selectByVisibleText(Source);
    await this.drpSource.click()
  }
  async AlertState(Source) {
    await this.drpAlertState.click();
    await drp.selectByVisibleText(Source);
    await this.drpAlertState.click();
  }
  async ResourceName(ResouceName: string) {
    await this.txtResource.sendKeys(ResouceName);
  }
  async enterInLastNumber(InLast: string) {
    await this.txtInLast.sendKeys(InLast);
  }
  async selectDurationType(DurationType) {
    await this.drpSelectDurationType.click();
    await drp.selectByVisibleText(DurationType);
  }
  async SaveFilter() {
    await this.btnSaveFilter.click();
  }
  async FilterName(FilterName: string) {
    await this.txtFilterName.sendKeys(FilterName);
  }

  async FilterDescription(FilterDescription: string) {
    await this.txtFilterDescription.sendKeys(FilterDescription);
  } 
  async savedFileterTitle(SavedFilter) {
    await element(by.xpath('//span[text()="'+SavedFilter+'"]')).click();
  }
  async selectSavedFilterFromAlertConsole(SavedFilter) {
    await this.drpSavedFilter.click();
    await drp.selectByVisibleText(SavedFilter);
  }
  async selectRemoveAllConditions() {
    await this.btnRemoveAll.click();
  }
  async removeSourceCondition() {
    await this.btnRemoveSourceCondition.click();
  } 
  async removeStateCondition() {
    await this.btnRemoveStateCondition.click();
  }
  async editSavedFilter() {
    await this.btnEditSavedFilter.click();
  }
  
  async clickOnMakeAsDefault() {
    await this.chkMakeAsDefault.click();
  }
  async Apply() {
    await this.btnApply.click();
  }
  async Save_Apply() {
    await this.btnSave_Apply.click();
  }
  async clickOnUpdateAndApply() {
    await this.btnUpdateAndApply.click();
  }
  async clickOnYes() {
    await this.btnYesConfirmation.click();
  }
  async getTestSouce(TestSource) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[8]//span')).getText().then(async function (text) {
        await expect(text).to.include(TestSource);
      });
  }
  async getTicketNumber(TicketNumber) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[11]//span')).getText().then(async function (text) {
      await expect(text).to.include(TicketNumber);
    });
  }
  async getLastAlertTime(LastAlertTime) {
  await element(by.xpath('//span[text()="Alert Name"]//following::td[5]//span//div')).getText().then(async function (text) {
        await expect(text).to.include(LastAlertTime);
      });
  }

  async getAlertName(AlertName) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[6]//span')).getText().then(async function (text) {
          await expect(text).to.include(AlertName);
        });
  }
  
  async getAlertMetric(AlertMetric) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[10]//span')).getText().then(async function (text) {
          await expect(text).to.include(AlertMetric);
        });
  }

}
import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class support {


  async selectByVisibleText(DropdownValue: string) {
    await element(by.xpath("//span[text()='" + DropdownValue + "']")).click();
  }
  async CheckBox(value: string) {
    await element(by.xpath("//label[text()='" + value + "']")).click();
  }
}

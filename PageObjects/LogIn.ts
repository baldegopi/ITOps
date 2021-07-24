import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class LogIn {
    txtUserName = element(by.name("username"))
    txtPassword = element(by.name("password"))
    btnClickOnSignIn = element(by.xpath('//input[@name="login"]'))

    async LogIn_Details(UserName: string, Password: string) {
        await this.txtUserName.sendKeys(UserName)
        await this.txtPassword.sendKeys(Password)
        await this.btnClickOnSignIn.click();
    }

}

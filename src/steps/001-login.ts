import {Given, Then, When} from "cucumber";
import {browser} from "protractor";
import {LoginPage} from "../pages/loginPage";

let {setDefaultTimeout} = require('cucumber');
let expect = require('chai').expect;
setDefaultTimeout(60 * 1000);
let login = new LoginPage();

Given(/^"([^"]*)" is open$/, async function (url) {
	await browser.waitForAngularEnabled(false);
	await browser.get(url);
	await browser.driver.sleep(500);
});

When(/^I click Sign-in$/, async function () {
	await login.acceptCookie.click();
	await login.loginBtn.click();
});
Then(/^enter valid "([^"]*) as username"$/, async (username) => {
	await login.userName.clear();
	await login.userName.sendKeys(username);
});
Then(/^I Continue$/, async () => {
	await login.continue.click();
});
Then(/^enter valid "([^"]*) as password"$/, async (password) => {
	await login.password.click();
	await login.password.clear();
	await login.password.sendKeys(password);
});

Then(/^I signed in$/, async () => {
	await login.submitBtn.click();
});

Then(/^I am logged in$/, async () => {
	await browser.driver.sleep(20000);
	await expect(login.dashboard.isDisplayed()).to.eventually.equal(true);
});







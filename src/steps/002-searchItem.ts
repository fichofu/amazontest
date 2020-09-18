import {Given, Then, When} from "cucumber";
import {SearchItemPage} from "../pages/searchItemPage";
import {browser, protractor} from "protractor";

let {setDefaultTimeout} = require('cucumber');
let expect = require('chai').expect;
let search = new SearchItemPage();
let EC = protractor.ExpectedConditions;

setDefaultTimeout(60 * 1000);

Given(/^when I search for "([^"]*)"$/, async (query) => {

	browser.wait(EC.visibilityOf(search.searchTxt));
	await search.searchTxt.clear();
	await search.searchTxt.sendKeys(query);

	browser.wait(EC.visibilityOf(search.searchBtn));
	await search.searchBtn.click();
});
When(/^the search results are displayed$/, async () => {
	browser.wait(EC.visibilityOf(search.queryFound));
	await expect(search.queryFound.isDisplayed()).to.eventually.equal(true);

});

Then(/^the search results has the "([^"]*)" in it$/, async (query) => {
	browser.wait(EC.visibilityOf(search.foundItem));
	await expect(search.foundItem.isDisplayed()).to.eventually.equal(true);
});







import {Given, Then, When} from "cucumber";
import {AddToCartPage} from "../pages/addToCartPage";
import {SearchItemPage} from "../pages/searchItemPage";
import {browser, protractor} from "protractor";

let {setDefaultTimeout} = require('cucumber');
let expect = require('chai').expect;
let EC = protractor.ExpectedConditions;

setDefaultTimeout(60 * 1000);

let cart = new AddToCartPage();
let search = new SearchItemPage();

Given(/^I add "([^"]*)" to my basket$/, async (query) => {
	browser.wait(EC.visibilityOf(search.foundItem));
	await search.foundItem.click();

	browser.wait(EC.visibilityOf(cart.addToCartBtn));

	await cart.addToCartBtn.click();

});

When(/^I check my basket total$/, async () => {
	browser.wait(EC.visibilityOf(cart.myCart));

	await cart.myCart.click();
});

Then(/^it should match the price of the item added into basket$/, async () => {
	browser.wait(EC.visibilityOf(cart.productPrice));
	browser.wait(EC.visibilityOf(cart.subTotal));

	expect(await cart.productPrice.getText()).to.equal(await cart.subTotal.getText());
});







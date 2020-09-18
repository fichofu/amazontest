"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const addToCartPage_1 = require("../pages/addToCartPage");
const searchItemPage_1 = require("../pages/searchItemPage");
const protractor_2 = require("protractor");
let { setDefaultTimeout } = require('cucumber');
let expect = require('chai').expect;
let EC = protractor_2.protractor.ExpectedConditions;
setDefaultTimeout(60 * 1000);
let cart = new addToCartPage_1.AddToCartPage();
let search = new searchItemPage_1.SearchItemPage();
cucumber_1.Given(/^I add "([^"]*)" to my basket$/, (query) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(search.foundItem));
    yield search.foundItem.click();
    protractor_2.browser.wait(EC.visibilityOf(cart.addToCartBtn));
    yield cart.addToCartBtn.click();
}));
cucumber_1.When(/^I check my basket total$/, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(cart.myCart));
    yield cart.myCart.click();
}));
cucumber_1.Then(/^it should match the price of the item added into basket$/, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(cart.productPrice));
    protractor_2.browser.wait(EC.visibilityOf(cart.subTotal));
    expect(yield cart.productPrice.getText()).to.equal(yield cart.subTotal.getText());
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDAzLWFkZFRvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjAwMy1hZGRUb0NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCwyQ0FBK0M7QUFFL0MsSUFBSSxFQUFDLGlCQUFpQixFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFFbEMsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFPLEtBQUssRUFBRSxFQUFFO0lBQ3ZELG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRS9CLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFakQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzVDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFM0MsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkRBQTJELEVBQUUsR0FBUyxFQUFFO0lBQzVFLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakQsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU3QyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=
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
const searchItemPage_1 = require("../pages/searchItemPage");
const protractor_2 = require("protractor");
let { setDefaultTimeout } = require('cucumber');
let expect = require('chai').expect;
let search = new searchItemPage_1.SearchItemPage();
let EC = protractor_2.protractor.ExpectedConditions;
setDefaultTimeout(60 * 1000);
cucumber_1.Given(/^when I search for "([^"]*)"$/, (query) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(search.searchTxt));
    yield search.searchTxt.clear();
    yield search.searchTxt.sendKeys(query);
    protractor_2.browser.wait(EC.visibilityOf(search.searchBtn));
    yield search.searchBtn.click();
}));
cucumber_1.When(/^the search results are displayed$/, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(search.queryFound));
    yield expect(search.queryFound.isDisplayed()).to.eventually.equal(true);
}));
cucumber_1.Then(/^the search results has the "([^"]*)" in it$/, (query) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_2.browser.wait(EC.visibilityOf(search.foundItem));
    yield expect(search.foundItem.isDisplayed()).to.eventually.equal(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDAyLXNlYXJjaEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIwMDItc2VhcmNoSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQyw0REFBdUQ7QUFDdkQsMkNBQStDO0FBRS9DLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ2xDLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLGdCQUFLLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUV0RCxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsR0FBUyxFQUFFO0lBQ3JELG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUNwRSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=
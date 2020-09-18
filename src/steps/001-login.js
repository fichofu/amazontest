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
const protractor_2 = require("protractor");
const loginPage_1 = require("../pages/loginPage");
let { setDefaultTimeout } = require('cucumber');
let expect = require('chai').expect;
setDefaultTimeout(60 * 1000);
let login = new loginPage_1.LoginPage();
cucumber_1.Given(/^"([^"]*)" is open$/, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_2.browser.waitForAngularEnabled(false);
        yield protractor_2.browser.get(url);
        yield protractor_2.browser.driver.sleep(500);
    });
});
cucumber_1.When(/^I click Sign-in$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.acceptCookie.click();
        yield login.loginBtn.click();
    });
});
cucumber_1.Then(/^enter valid "([^"]*) as username"$/, (username) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.userName.clear();
    yield login.userName.sendKeys(username);
}));
cucumber_1.Then(/^I Continue$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.continue.click();
}));
cucumber_1.Then(/^enter valid "([^"]*) as password"$/, (password) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.password.click();
    yield login.password.clear();
    yield login.password.sendKeys(password);
}));
cucumber_1.Then(/^I signed in$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.submitBtn.click();
}));
cucumber_1.Then(/^I am logged in$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_2.browser.driver.sleep(20000);
    yield expect(login.dashboard.isDisplayed()).to.eventually.equal(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDAxLWxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiMDAxLWxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTJDO0FBQzNDLDJDQUFtQztBQUNuQyxrREFBNkM7QUFFN0MsSUFBSSxFQUFDLGlCQUFpQixFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRTVCLGdCQUFLLENBQUMscUJBQXFCLEVBQUUsVUFBZ0IsR0FBRzs7UUFDL0MsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtQkFBbUIsRUFBRTs7UUFDekIsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxjQUFjLEVBQUUsR0FBUyxFQUFFO0lBQy9CLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZUFBZSxFQUFFLEdBQVMsRUFBRTtJQUNoQyxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7SUFDbkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==
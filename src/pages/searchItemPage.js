"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
class SearchItemPage {
    constructor() {
        this.searchTxt = protractor_2.element(protractor_2.by.id('twotabsearchtextbox'));
        this.searchBtn = protractor_2.element(protractor_2.by.css(".nav-search-submit .nav-input"));
        this.queryFound = protractor_2.element(protractor_2.by.className('a-color-state a-text-bold'));
        this.foundItem = protractor_2.element(protractor_2.by.xpath("//span[contains(text(),'Iceworks 5000')]"));
    }
}
exports.SearchItemPage = SearchItemPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSXRlbVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2hJdGVtUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUN4RCxNQUFhLGNBQWM7SUFPdkI7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFFakYsQ0FBQztDQUVKO0FBaEJELHdDQWdCQyJ9
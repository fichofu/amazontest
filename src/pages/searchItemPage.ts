import { by, ElementFinder, element } from "protractor";
export class SearchItemPage
{
    public searchBtn:ElementFinder;
    public searchTxt:ElementFinder;
    public foundItem:ElementFinder;
    public queryFound:ElementFinder;

    constructor()
    {
        this.searchTxt=element(by.id('twotabsearchtextbox'));
        this.searchBtn=element(by.css(".nav-search-submit .nav-input"));
        this.queryFound=element(by.className('a-color-state a-text-bold'));
        this.foundItem=element(by.xpath("//span[contains(text(),'Iceworks 5000')]"));

    }

}

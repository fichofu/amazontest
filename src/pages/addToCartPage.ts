import {by, element, ElementFinder} from "protractor";

export class AddToCartPage {

	public addToCartBtn: ElementFinder;
	public myCart: ElementFinder;
	public productPrice: ElementFinder;
	public subTotal: ElementFinder;


	constructor() {
		this.addToCartBtn = element(by.id('add-to-cart-button'));
		this.myCart = element(by.id('nav-cart'));
		this.productPrice = element(by.className('a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'));
		this.subTotal = element(by.className('a-size-medium a-color-base sc-price sc-white-space-nowrap'));
	}

}

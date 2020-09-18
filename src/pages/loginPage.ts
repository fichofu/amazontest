import {by, element, ElementFinder} from "protractor";

export class LoginPage {
	public loginBtn: ElementFinder;
	public userName: ElementFinder;
	public continue: ElementFinder;
	public password: ElementFinder;
	public submitBtn: ElementFinder;
	public dashboard: ElementFinder;
	public acceptCookie: ElementFinder;

	constructor() {
		this.loginBtn = element(by.id('nav-link-accountList'));
		this.userName = element(by.name('email'));
		this.continue = element(by.id('continue'));
		this.password = element(by.name('password'));
		this.submitBtn = element(by.id('signInSubmit'));
		this.acceptCookie = element(by.id('sp-cc-accept'));
		this.dashboard = element(by.className('nav-shortened-name'));

	}
}

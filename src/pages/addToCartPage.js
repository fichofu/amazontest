"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_2 = require("protractor");
class AddToCartPage {
    constructor() {
        this.addToCartBtn = protractor_2.element(protractor_2.by.id('add-to-cart-button'));
        this.myCart = protractor_2.element(protractor_2.by.id('nav-cart'));
        this.productPrice = protractor_2.element(protractor_2.by.className('a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'));
        this.subTotal = protractor_2.element(protractor_2.by.className('a-size-medium a-color-base sc-price sc-white-space-nowrap'));
    }
}
exports.AddToCartPage = AddToCartPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9DYXJ0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZFRvQ2FydFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxhQUFhO0lBUXpCO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0ZBQXdGLENBQUMsQ0FBQyxDQUFDO1FBQ3BJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0NBRUQ7QUFmRCxzQ0FlQyJ9
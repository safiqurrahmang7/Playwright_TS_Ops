import { Page, Locator, expect} from "@playwright/test";

export default class CartPage{

    readonly _page: Page;
    readonly _cartProducts:Locator;
    readonly _checkoutBtn:Locator;
    constructor(page:Page){

        this._page = page;
        this._cartProducts = page.locator(".cartSection");
        this._checkoutBtn = page.getByRole('button',{name:'Checkout'});
    }

    async validateAddedProduct(productName:string){
        await expect(this._cartProducts.filter({hasText:productName})).toBeVisible();
    }

    async clickCheckoutButton(){
        await this._checkoutBtn.click();
    }
}
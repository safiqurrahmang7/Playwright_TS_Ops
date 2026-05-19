import {expect, Locator, Page} from '@playwright/test';

export default class Dashboardpage{

    readonly _page:Page;
    readonly _cardBody:Locator;
    readonly _cartBtn:Locator;
    constructor(page:Page){

        this._page = page;
        this._cardBody = page.locator(".card-body");
        this._cartBtn = page.locator("[routerlink*='cart']");
    }

    async searchAndAddToCart(productName:string){
        await this._cardBody
            .filter({hasText:productName})
            .getByRole('button',{name:"Add To Cart"})
            .waitFor();
        await this._cardBody
            .filter({hasText:productName})
            .getByRole('button',{name:"Add To Cart"})
            .click();
    }

    async clickCartBtn(){

        await this._cartBtn.click();
        await this._page.waitForLoadState('networkidle')
    }
}
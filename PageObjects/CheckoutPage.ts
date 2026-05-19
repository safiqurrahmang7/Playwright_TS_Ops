import { Locator, Page } from "@playwright/test";

export default class CheckoutPage{


    readonly _page:Page;
    readonly _countryDrpdwn:Locator;
    readonly _countryresults:Locator;
    readonly _inputFields:Locator;
    readonly _orderBtn:Locator;
    constructor(page:Page){
        this._page = page;
        this._countryDrpdwn = page.getByPlaceholder("Select Country");
        this._countryresults = page.locator(".ta-results");
        this._inputFields = page.locator(".field");
        this._orderBtn =page.getByText("PLACE ORDER");
    }

    async fillTheRequiredFields(input:string,option:string,CVVCode:string,nameOnCard:string){

        await this._countryDrpdwn.pressSequentially(input);
        await this._countryresults.getByText(option,{exact:true}).click();
        await this._inputFields.filter({hasText:'CVV'}).getByRole('textbox').fill(CVVCode);
        await this._inputFields.filter({hasText:'Name on Card'}).getByRole('textbox').fill(nameOnCard);
    }

    async clickPlaceOrderButton(){

        await this._orderBtn.click();

    }



}
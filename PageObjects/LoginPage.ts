import { Locator, Page } from "@playwright/test";


export default class LoginPage{

    readonly _page:Page;
    readonly _email:Locator;
    readonly _password:Locator;
    readonly _loginbtn:Locator;

    constructor(page:Page){
        this._page = page;
        this._email = page.locator("#userEmail");
        this._password = page.locator("#userPassword");
        this._loginbtn = page.locator("#login");
    }
 
    async gotoUrl(url:string){
        await this._page.goto(url);
    }

    async userLogin(userName:string,passowrd:string){

        await this._email.fill(userName);
        await this._password.fill(passowrd);
        await this._loginbtn.click();

    }
}
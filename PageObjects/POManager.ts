import { Page } from "@playwright/test";
import LoginPage from "./LoginPage";
import Dashboardpage from "./Dashboard";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";


export default class POManager{

    readonly _loginPage:LoginPage;
    readonly _dashboardpage:Dashboardpage;
    readonly _cartPage: CartPage;
    readonly _checkoutpage:CheckoutPage;
    constructor(page:Page){
        this._loginPage = new LoginPage(page);
        this._dashboardpage = new Dashboardpage(page);
        this._cartPage = new CartPage(page);
        this._checkoutpage = new CheckoutPage(page);
    }

    getLoginPage():LoginPage{
        return this._loginPage;
    }

    getDashboardPage():Dashboardpage{
        return this._dashboardpage;
    }

    getCartPage():CartPage{
        return this._cartPage;
    }

    getCheckoutPage():CheckoutPage{
        return this._checkoutpage;
    }
}

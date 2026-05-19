import {test} from '@playwright/test';
import POManager from '../PageObjects/POManager'
import userData from '../TestData/Users.json' with{type:'json'};
import productData from '../TestData/products.json' with{type:'json'};
import CheckoutData from '../TestData/checkout.json' with{type:'json'};


test("Buy a Product", async ({page})=>{
    const {email,password} = userData
    const {productName} = productData;
    const {input,option,cvvCode,nameOnCard} = CheckoutData;
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    

     await loginPage.gotoUrl("/client/#/dashboard/dash");
    // await loginPage.userLogin(email,password);

    //dasboardpage
    const dasboardpage = poManager.getDashboardPage();
    await dasboardpage.searchAndAddToCart(productName);
    await dasboardpage.clickCartBtn();
    
    //cart page

    const cartPage = poManager.getCartPage();
    await cartPage.validateAddedProduct(productName);
    await cartPage.clickCheckoutButton();

    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.fillTheRequiredFields(input,option,cvvCode,nameOnCard);
    await checkoutPage.clickPlaceOrderButton();
})

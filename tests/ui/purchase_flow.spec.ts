import {test, request, expect} from '@playwright/test';
import POManager from '../../PageObjects/POManager';
import productData from '../../TestData/products.json' with{type:'json'};
import CheckoutData from '../../TestData/checkout.json' with{type:'json'};
import data from '../../TestData/Users.json' with {type:'json'};


const UserData = data
let token:string;
test.beforeEach(async ({},testInfo)=>{

    const userEmail = UserData[testInfo.workerIndex % UserData.length];

    const apiContext = await request.newContext();
    const response = await  apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:{userEmail:userEmail.email,userPassword:"Test@123"}});
    
    expect(response.ok()).toBeTruthy();
    const loginRes = await response.json();
    token = loginRes.token;
    console.log(userEmail.email)

})
test("Buy a Product", async ({page})=>{

    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, token);
    
    const {productName} = productData;
    const {input,option,cvvCode,nameOnCard} = CheckoutData;
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    

    await loginPage.gotoUrl("/client/#/dashboard/dash");

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
});




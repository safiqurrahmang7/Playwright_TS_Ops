import {test} from '@playwright/test';
import POManager from '../PageObjects/POManager';



test('Chromium Login',async ({page})=>{

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.gotoUrl("/client/#/auth/login");
    await loginPage.userLogin("Safiqurrahmang7@gmail.com","Test@123");
    await page.waitForURL("**/dashboard/**");
    await page.context().storageState({
        path:'auth/chromium.json'
    })
});

test('Firefox Login',async ({page})=>{

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.gotoUrl("/client/#/auth/login");
    await loginPage.userLogin("safiqur@mailinator.com","Test@123");
    await page.waitForURL("**/dashboard/**");
    await page.context().storageState({
        path:'auth/firefox.json'
    })
});

test('Webkit Login',async ({page})=>{

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.gotoUrl("/client/#/auth/login");
    await loginPage.userLogin("safiqtest@mailinator.com","Test@123");
    await page.waitForURL("**/dashboard/**");
    await page.context().storageState({
        path:'auth/MSEdge.json'
    })
});

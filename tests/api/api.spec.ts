import {test,expect,request} from '@playwright/test';
import data from '../../TestData/Users.json' with {type:'json'};


const UserData = data
let token:string;




test('test api', async({},testInfo)=>{

    const userEmail = UserData[testInfo.workerIndex % UserData.length];
    
        const apiContext = await request.newContext();
        const response = await  apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:{userEmail:userEmail.email,userPassword:"Test@123"}});
        const body = await response.json();

        expect(response.ok()).toBeTruthy();
        expect(body.token).not.toBeNull();


});
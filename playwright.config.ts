import {defineConfig} from '@playwright/test';

const authFile = /auth\.spec\.ts/;
const browserProjectDefaults = {
  dependencies:['setup auth'],
  testIgnore:authFile,
};

export default defineConfig({

  
  testDir:'./tests',
  timeout:30*1000,
  fullyParallel:true,
  workers:3,
  expect:{
    timeout:10000
  },
  reporter:'html',
  use:{
    baseURL:"https://rahulshettyacademy.com/",
    // connectOptions:{
    //   wsEndpoint:process.env.PLAYWRIGHT_SERVICE_URL!,
    // },
    headless:true,
    screenshot:'only-on-failure',
    trace:'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects:[
    {
      name:'setup auth',
      testMatch:authFile,
    },
    {
      name:'Chrome',
      ...browserProjectDefaults,
      
      use:{
        browserName:'chromium',
        storageState:'auth/chromium.json'
        
      }
    },
    {
      name:'Firefox',
      ...browserProjectDefaults,
      use:{
        browserName:'firefox',
        storageState:'auth/firefox.json'
      }
    },
    {
      name:'Edge',
      ...browserProjectDefaults,
      use:{
         channel: 'msedge',
         browserName: 'chromium',
         storageState:'auth/MSEdge.json'
      },
    }
  ]
})

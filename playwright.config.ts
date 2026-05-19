import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import {defineConfig} from '@playwright/test';


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
    baseURL:process.env.BASE_URL,
    // connectOptions:{
    //   wsEndpoint:process.env.PLAYWRIGHT_SERVICE_URL!,
    // },
    headless:false,
    screenshot:'only-on-failure',
    trace:'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects:[
    {
      name:'setup auth',
      testMatch:/auth\.spec\.ts/,
    },
    {
      name:'Chrome',
      dependencies:['setup auth'],
      testIgnore:/auth\.spec\.ts/,
      use:{
        browserName:'chromium',
        storageState:'auth/chromium.json'
        
      }
    },
    {
      name:'Firefox',
      dependencies:['setup auth'],
      testIgnore:/auth\.spec\.ts/,
      use:{
        browserName:'firefox',
        storageState:'auth/firefox.json'
      }
    },
    {
      name:'Edge',
      dependencies:['setup auth'],
      testIgnore:/auth\.spec\.ts/,
      use:{
         channel: 'msedge',
         browserName: 'chromium',
         storageState:'auth/MSEdge.json'
      },
    }
  ]
})

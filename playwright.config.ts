import {defineConfig, devices} from '@playwright/test';



export default defineConfig({

  
  testDir:'./tests',
  timeout:30*1000,
  fullyParallel:true,
  workers:3,
  expect:{
    timeout:10000
  },
  retries:1,
  reporter:'html',
  use:{
    baseURL:"https://rahulshettyacademy.com/",
    headless:true,
    screenshot:'only-on-failure',
    trace:'retain-on-failure',
    video: 'retain-on-failure',
    launchOptions:{
      args:['--start-maximized']
    },
    viewport:null
  },

  projects:[

    {
      name: 'api',
      testMatch: /.*api.*\.spec\.ts/
    },
    {
      name:'Chrome',
      use:{
        browserName:'chromium',
                
      },
      testMatch: /.*ui.*\.spec\.ts/
    },
    {
      name:'Firefox',
      use:{
        ...devices['Desktop Firefox'],
        browserName:'firefox'
        
      },
      testMatch: /.*ui.*\.spec\.ts/
    },
    {
      name:'Edge',
      use:{
         channel: 'msedge',
         browserName: 'chromium',
      },
      testMatch: /.*ui.*\.spec\.ts/
    }
  ]
})

require('dotenv').config();

const { chromium, expect } = require('@playwright/test');

module.exports = async (config) => {
  // set env variables
  const {
    storageState, importHTTPSErrors, headless, baseURL,
  } = config.projects[0].use;

  //instantiate
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(baseURL, { timeout: 6000 });
  await browser.close();
}










/*import { FullConfig } from "@playwright/test";
import { config as _config } from 'dotenv';

async function globalSetup(config) {
    _config({
      path: '.env',
      override: true
    });
  }
  
  export default globalSetup;*/
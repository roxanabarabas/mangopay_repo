const globalSetup = require('./global-setup');

require('dotenv').config();

if (process.env.env === undefined || process.env.env === 'prod') {
  process.env.env = '';
} else {
  if (process.env.env.toLowerCase() === 'qa') {
    process.env.env = 'stg';
    process.env.env = process.env.env.toLowerCase();
  }
}

const config = {
  testDir: './tests',
  globalSetup: './global-setup',
  fullyParallel: true,
  retries: 1,
  workers: undefined,
  reporter: 'html',
  use: {
    baseURL:`https://www.${process.env.env}google.com/maps?hl=en`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  }
};

module.exports = config;
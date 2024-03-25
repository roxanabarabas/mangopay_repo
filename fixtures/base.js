/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const base = require('@playwright/test');
const { Search } = require('../objects/Search');

exports.test = base.test.extend({
    searchClass: async ({ page }, use) => {
        await use(new Search (page));
    }
})
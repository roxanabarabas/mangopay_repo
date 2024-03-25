/* eslint-disable no-undef */
import { expect } from '@playwright/test';
import { test } from '../fixtures/base';

test.describe('Search functionality for Google Maps', () => {
  test.beforeEach(async ({ searchClass,page }) => {
    await page.goto(process.env.URL)
    await searchClass.acceptCookies();
  });
  test('Check if the correct language is selected', async ({ searchClass }) => {
    let headerLang = await searchClass.languageSetToEnglish();
    expect(headerLang).toContain('Directions');
  });
  test('Search for destination Paris', async ({ searchClass }) => {
    await searchClass.typeDestination('Paris');
    let destTitle = await searchClass.getTextForTitle();
    expect(destTitle).toContain('Paris');
  });
  test('Navigate to London destination', async ({ searchClass }) => {
    await searchClass.typeDestination('London');
    await searchClass.navigateToDestination('Watford');
    let dest = await searchClass.getTextForDestination();
    expect(dest).toContain('London');
  });
  test('Negative test, navigate to long distance location', async ({ searchClass }) => {
    await searchClass.typeDestination('London');
    await searchClass.navigateByCarToImpossibleDest('New Zealand');
    let destNotPossible = await searchClass.getTextForImpossibleDest();
    expect(destNotPossible).toContain('Sorry, your search appears to be outside our current coverage area for driving.');
  });
  test('Negative test, wrong spelling', async ({ searchClass }) => {
    await searchClass.typeDestination('London');
    await searchClass.navigateToDestination('xashada');
    let wrongName = await searchClass.getTextForWrongName();
    expect(wrongName).toContain(`Google Maps can't find xashada`);
  })
  test('Boundry test, max 10 destinations available', async ({ searchClass }) => {
    await searchClass.typeDestination('Empuriabrava');
    await searchClass.navigateToDestination('Monaco');
    await searchClass.maxTenDestinations('Roses', 'Montpellier', 'Toulon', 'Cannes', 'Sanremo', 'Genoa', 'La Spezia', 'Pisa', 'Livorno')
    let noMoreDest = await searchClass.getTextForAddDestination();
    expect(noMoreDest).toContain('The maximum number of destinations has been reached.');
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
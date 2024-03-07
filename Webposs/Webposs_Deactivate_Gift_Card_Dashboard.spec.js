import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.giftcard.99minds.co/access/login');
  
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('nilesh@99minds.io');
  
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Nilesh@12345678');
  
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('Braintree').click();
  await page.getByRole('link', { name: 'Web POS' }).click();
  
  await page.getByRole('button', { name: 'Deactivate Gift Card', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select Store$/ }).nth(3).click();
  await page.getByText('QA', { exact: true }).click();
  
  await page.getByPlaceholder('Card Number').click();
  await page.getByPlaceholder('Card Number').fill('checkallcards11');

  await page.locator('form').getByRole('button', { name: 'Check balance' }).click();

  await page.locator('div').filter({ hasText: /^View Gift Card details$/ }).locator('path').click();

  await page.getByPlaceholder('Client Order ID').click();
  await page.getByPlaceholder('Client Order ID').fill('jh');

  await page.getByPlaceholder('Note').click();
  await page.getByPlaceholder('Note').fill('poioi');

  await page.getByRole('button', { name: 'Submit' }).click();
});
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
  
  await page.getByRole('button', { name: 'Redeem Gift Card' }).click();
  await page.locator('div').filter({ hasText: /^Select Store$/ }).nth(3).click();
  await page.getByText('QA', { exact: true }).click();
  
  await page.getByPlaceholder('Card Number').click();
  await page.getByPlaceholder('Card Number').fill('VU788FXGCW9QAWQK');
  
  await page.locator('form').getByRole('button', { name: 'Check balance' }).click();
  await page.locator('div').filter({ hasText: /^View Gift Card details$/ }).locator('svg').click();
  
  await page.getByPlaceholder('Redeem Amount').click();
  await page.getByPlaceholder('Redeem Amount').fill('1');
  
  await page.getByPlaceholder('Client Order ID').click();
  await page.getByPlaceholder('Client Order ID').fill('hkjhkjhdkj747');

  await page.getByPlaceholder('Note').click();
  await page.getByPlaceholder('Note').fill('Hello');
  
  await page.getByRole('button', { name: 'Submit' }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.giftcard.99minds.co/access/login');

  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('Nilesh@99minds.io');
  
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Nilesh@12345678');

  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByText('Braintree').click();
}, { timeout: 6000 });
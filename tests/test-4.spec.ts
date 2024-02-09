import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Jetsetter' }).click();
  await page.getByTestId('new-item-input').click();
  await page.getByTestId('new-item-input').fill('angel');
  await page.getByTestId('add-item').click();
  await page.locator('li').filter({ hasText: 'Secret Menu' }).click();
  await page.getByLabel('Minimum Rating:').fill('4');
  await page.getByLabel('Minimum Rating:').click();
  await page.getByLabel('Restaurant').selectOption('McDonalds');
  await page.getByRole('link', { name: 'Pokémon Search' }).click();
  await page.getByTestId('search').click();
  await page.getByTestId('search').fill('Pika');
  await page.getByTestId('search').press('Enter');
});

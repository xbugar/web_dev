import { test, expect } from '@playwright/test';

test.describe("Home Page", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/home');
  });

  test('should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('gradia · write it down');
    await expect(page.getByRole('heading', { name: /gradia/i })).toBeVisible();
  })

  test('should link to notebooks page', async ({ page }) => {
    await page.waitForSelector('a[href="/notebooks"]');
    await expect(page.getByRole('link', { name: /notebooks/i })).toBeVisible();
  })

  test('should link to calendar page', async ({ page }) => {
    await page.waitForSelector('a[href="/calendar/today"]');
    await expect(page.getByRole('link', { name: /calendar/i })).toBeVisible();
  })

  test('should link to flashdecks page', async ({ page }) => {
    await page.waitForSelector('a[href="/flashdecks"]');
    await expect(page.getByRole('link', { name: /flashdecks/i })).toBeVisible();
  })

  test('should link to search page', async ({ page }) => {
    await page.waitForSelector('a[href="/search"]');
    await expect(page.getByRole('link', { name: /search/i })).toBeVisible();
  })
})
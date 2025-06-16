// import { test, expect } from '@playwright/test';
//
// test.describe("Home Page", async () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('http://localhost:5173/home');
//   });
//
//   test('should have correct metadata and elements', async ({ page }) => {
//     await expect(page).toHaveTitle('gradia · write it down');
//     await expect(page.getByRole('heading', { name: 'gradia.' })).toBeVisible();
//   })
//
//   test('should link to notebooks page', async ({ page }) => {
//     const notebooks = page.getByRole('link', { name: 'Notebooks' });
//     await expect(notebooks).toBeVisible();
//     await notebooks.click();
//     await expect(page).toHaveURL('http://localhost:5173/notebooks');
//   })
//
//   test('should link to calendar page', async ({ page }) => {
//     const calendars = page.getByRole('link', { name: 'Calendar' });
//     await expect(calendars).toBeVisible();
//     await calendars.click();
//     await expect(page).toHaveURL('http://localhost:5173/calendar/today');
//   })
//
//   test('should link to flashcards page', async ({ page }) => {
//     const flashcards = page.getByRole('link', { name: 'Flashcards' });
//     // await expect(flashcards).toBeVisible();
//     await flashcards.click();
//     await expect(page).toHaveURL('http://localhost:5173/flashcards');
//   })
// })
//
// test.describe("Notebooks", async () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('http://localhost:5173/notebooks');
//   });
//
//   test('should have correct metadata and elements', async ({ page }) => {
//     await expect(page).toHaveTitle('gradia · write it down');
//     await expect(page.getByRole('heading', { name: 'Notebooks' })).toBeVisible();
//   })
//
//   test('should create a notebook', async ({ page }) => {
//     await page.locator('div').filter({ hasText: /^Notebooks$/ }).getByRole('button').click();
//     await page.getByLabel('Title*').fill('Test notebook');
//     await page.getByLabel('Description').fill('Notebook created during Playwright test');
//     await page.getByRole('button', { name: 'Create' }).click();
//     await expect(page.getByText('Test notebook')).toBeVisible();
//   })
//
//   test('should edit a notebook', async ({ page }) => {
//     await page.locator('div').filter({ hasText: /^Notebooks$/ }).getByRole('button').click();
//     await page.getByLabel('Title*').fill('Test notebook');
//     await page.getByLabel('Description').fill('Notebook created during Playwright test');
//     await page.getByRole('button', { name: 'Create' }).click();
//     await expect(page.getByText('Test notebook')).toBeVisible();
//
//     await page.getByRole('button').nth(3).click();
//     await page.getByRole('menuitem', { name: 'Edit notebook' }).click();
//
//     await page.getByRole('combobox').filter({ hasText: 'Red' }).click();
//     await page.getByRole('option', { name: 'Green' }).click();
//     await page.getByRole('combobox').filter({ hasText: 'Green' }).click();
//     await page.locator('button').filter({ hasText: 'BookOpen' }).click();
//     await page.getByRole('option', { name: 'PenTool' }).click();
//
//     await page.getByLabel('Title*').fill('Edited notebook');
//     await page.getByLabel('Description').fill('Updated description');
//
//     await page.getByRole('button', { name: 'Edit' }).click();
//
//     await expect(page.getByText('Edited notebook')).toBeVisible();
//     await expect(page.getByText('Updated description')).toBeVisible();
//   })
//
//   test('should delete a notebook', async ({ page }) => {
//     await page.locator('div').filter({ hasText: /^Notebooks$/ }).getByRole('button').click();
//     await page.getByLabel('Title*').fill('Notebook to delete');
//     await page.getByLabel('Description').fill('Notebook created during Playwright test');
//     await page.getByRole('button', { name: 'Create' }).click();
//     await expect(page.getByText('Notebook to delete')).toBeVisible();
//
//     const notebookCard = page.getByText('Notebook to delete');
//     const menuButton = notebookCard.locator('..').getByRole('button', { name: /more/i });
//     await menuButton.click();    await page.getByRole('menuitem', { name: 'Delete' }).click();
//     await page.getByRole('button', { name: 'Continue' }).click();
//
//     await expect(page.getByText('Notebook to delete')).toHaveCount(0);
//   })
// })
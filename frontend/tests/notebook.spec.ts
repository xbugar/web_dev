import { expect, test } from "@playwright/test";

test.describe("Notebooks", async () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/notebooks');
  });

  test('should have correct metadata and elements', async ({page}) => {
    await expect(page).toHaveTitle('gradia · write it down');
    const heading = page.getByRole('heading', {name: 'Notebooks'});
    await heading.isVisible();
  })

  test('should create a notebook', async ({page}) => {
    await page.locator('div').filter({hasText: /^Notebooks$/}).getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill('Test notebook');
    await page.getByPlaceholder('Enter description').fill('Notebook created during Playwright test');
    await page.getByRole('button', {name: 'Create'}).click();
    await expect(page.getByText('Test notebook')).toBeVisible();
  })
})

test.describe("Notebook menu", async () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/notebooks');
    await page.locator('div').filter({hasText: /^Notebooks$/}).getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill('Test notebook');
    await page.getByPlaceholder('Enter description').fill('Notebook created during Playwright test');
    await page.getByRole('button', {name: 'Create'}).click();
    await expect(page.getByText('Test notebook')).toBeVisible();
  });

  test('should edit notebook', async ({page}) => {
    const card = page.getByTestId('notebook-card');
    // await expect(card).toBeVisible();
    await card.getByTestId('menu-button');

    await page.getByRole('combobox').filter({hasText: 'Red'}).click();
    await page.getByRole('option', {name: 'Green'}).click();
    await page.getByRole('combobox').filter({hasText: 'Green'}).click();
    await page.locator('button').filter({hasText: 'BookOpen'}).click();
    await page.getByRole('option', {name: 'PenTool'}).click();

    await page.getByLabel('Title*').fill('Edited notebook');
    await page.getByLabel('Description').fill('Updated description');

    await page.getByRole('button', {name: 'Edit'}).click();

    await expect(page.getByText('Edited notebook')).toBeVisible();
    await expect(page.getByText('Updated description')).toBeVisible();
  })

  test('should delete notebook', async ({page}) => {
    await page.locator('[data-testid="notebook-card"]').first()
      .locator('[data-testid="menu-button"]')
      .click();
    await page.getByRole('menuitem', {name: 'Delete'}).click();
    await page.getByRole('button', {name: 'Continue'}).click();

    await expect(page.getByText('Test notebook')).toHaveCount(0);
  })
})
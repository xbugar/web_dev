import { expect, Page, test } from "@playwright/test";

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
    const uniqueName = `Test Notebook ${Date.now()}`;
    await page.locator('div').filter({hasText: /^Notebooks$/}).getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill(uniqueName);
    await page.getByPlaceholder('Enter description').fill('Notebook created during Playwright test');
    await page.getByRole('button', {name: 'Create'}).click();
    await expect(page.getByText(uniqueName)).toBeVisible();
  })
})

test.describe("Notebook edit", async () => {
  let uniqueName: string;
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/notebooks');
    await page.locator('div').filter({hasText: /^Notebooks$/}).getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill('Edit notebook');
    await page.getByPlaceholder('Enter description').fill('Notebook created during Playwright test');
    await page.getByRole('button', {name: 'Create'}).click();
    await page.getByTestId('menu-button').first().click();
    // await expect(page.getByText('Edit notebook').first()).toBeVisible();
    await page.getByRole('menuitem', { name: 'Edit notebook' }).click();
  });

  test('should edit title and description', async ({page}) => {
    uniqueName = `Edited Notebook ${Date.now()}`;
    const uniqueDescription = `Updated description ${Date.now()}`;
    await page.getByLabel('Title*').fill(uniqueName);
    await page.getByLabel('Description').fill(uniqueDescription);

    await page.getByRole('button', {name: 'Edit'}).click();

    await expect(page.getByText(uniqueName)).toBeVisible();
    await expect(page.getByText(uniqueDescription)).toBeVisible();
  })

  test('should edit icon', async ({page}) => {
    await page.getByRole('combobox').filter({hasText: 'Red'}).click();
    await page.getByRole('option', {name: 'Green'}).click();
    await page.getByRole('combobox').filter({hasText: 'Green'}).click();
    await page.locator('button').filter({hasText: 'Cpu'}).click();
    await page.getByRole('option', {name: 'PenTool'}).click();
  })
})

test.describe("Notebook delete", async () => {
  let uniqueName: string;
  test.beforeEach(async ({page}) => {
    uniqueName = `Test Notebook ${Date.now()}`;
    await createNotebook(page, uniqueName, 'notebook');
  })

  test('should delete notebook', async ({page}) => {
    await page.getByRole('menuitem', {name: 'Delete'}).click();
    await page.getByRole('button', {name: 'Continue'}).click();

    await page.goto('http://localhost:5173/notebooks');
    const notebook = page.getByText(uniqueName);
    await expect(notebook).not.toBeVisible();
  })
})

async function createNotebook(page: Page, title: string, description: string) {
  await page.goto('http://localhost:5173/notebooks');
  await page.locator('div').filter({ hasText: /^Notebooks$/ }).getByRole('button').click();
  await page.getByPlaceholder('Enter title').fill(title);
  await page.getByPlaceholder('Enter description').fill(description);
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText(title)).toBeVisible();
  await page.locator('[data-testid="menu-button"]').first().click();
}
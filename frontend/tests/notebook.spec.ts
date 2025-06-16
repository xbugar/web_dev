import { expect, Page, test } from "@playwright/test";

test.describe("Notebooks", async () => {
  let createdNotebookIds: string[] = [];
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/notebooks');
  });

  test.afterEach(async () => {
    for (const id of createdNotebookIds) {
      await fetch(`https://backend-511443014815.europe-west1.run.app/notebook/${id}`, {
        method: 'DELETE',
      });
    }
    createdNotebookIds = [];
  });

  test('should have correct metadata and elements', async ({page}) => {
    await expect(page).toHaveTitle('gradia · write it down');
    const heading = page.getByRole('heading', {name: 'Notebooks'});
    await heading.isVisible();
  })

  test('should navigate directly to notebook detail', async ({ page }) => {
    const name = `Detail Notebook ${Date.now()}`;
    await createNotebook(page, name, 'Direct link test');

    const notebookLink = await page.getByText(name).getAttribute('href');
    await page.goto(`http://localhost:5173${notebookLink}`);

    await expect(page.locator('#root').getByText(name)).toBeVisible();
  });

  test('should create a notebook', async ({page}) => {
    const uniqueName = `Test Notebook ${Date.now()}`;
    await page.locator('div').filter({hasText: /^Notebooks$/}).getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill(uniqueName);
    await page.getByPlaceholder('Enter description').fill('Notebook created during Playwright test');
    await page.getByRole('button', {name: 'Create'}).click();

    const href = await page.getByRole('link', { name: uniqueName }).getAttribute('href');
    const id = href?.split('/').pop();
    if (id) {
      createdNotebookIds.push(id);
    }

    await expect(page.getByText(uniqueName)).toBeVisible();
  })
})

test.describe("Notebook edit", async () => {
  let uniqueName: string;
  test.beforeEach(async ({page}) => {
    uniqueName = `Test Notebook ${Date.now()}`;
    await createNotebook(page, uniqueName, 'Notebook created during Playwright test');
    await page.getByRole('menuitem', { name: 'Edit notebook' }).click();
  });

  test('should edit title and description', async ({page}) => {
    uniqueName = `Edited Notebook ${Date.now()}`;
    const uniqueDescription = `Updated description ${Date.now()}`;
    await page.getByLabel('Title*').fill(uniqueName);
    await page.getByLabel('Description').fill(uniqueDescription);

    await page.getByRole('button', {name: 'Edit'}).click();

    await expect(page.getByText(uniqueName)).toBeVisible();
    await expect(page.locator('#root').getByText(uniqueDescription)).toBeVisible();
  })

  test('should edit icon', async ({page}) => {
    await page.getByRole('combobox').filter({hasText: 'Cpu'}).click();
    await page.getByRole('option', {name: 'PenTool'}).click();
    await expect(page.getByRole('button').filter({hasText: 'PenTool'})).not.toBeVisible();
    await expect(page.getByRole('button', {name: 'Edit'})).toBeVisible();
    await page.getByRole('button', {name: 'Edit'}).click();
  })

  test('should edit color', async ({page}) => {
    await page.getByRole('combobox').filter({hasText: 'Red'}).click();
    await page.getByRole('option', {name: 'Green'}).click();
    await expect(page.getByRole('button').filter({hasText: 'Green'})).not.toBeVisible();
    await expect(page.getByRole('button', {name: 'Edit'})).toBeVisible();
    await page.getByRole('button', {name: 'Edit'}).click();
  })

  test('should not save changes when cancel is clicked', async ({ page }) => {
    const originalTitle = `Cancel Test ${Date.now()}`;
    await createNotebook(page, originalTitle, 'Original desc');
    await page.getByRole('menuitem', { name: 'Edit notebook' }).click();

    await page.getByLabel('Title*').fill('New Title');
    await page.getByRole('button', { name: 'Cancel' }).click();

    await expect(page.getByText(originalTitle)).toBeVisible();
    await expect(page.getByText('New Title')).not.toBeVisible();
  });

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
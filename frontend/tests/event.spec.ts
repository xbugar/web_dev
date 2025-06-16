import { expect, Page, test } from "@playwright/test";

test.describe("Events", async () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/events');
  });

  test('should have correct metadata and elements', async ({page}) => {
    await expect(page).toHaveTitle('gradia · write it down');
    const heading = page.getByRole('heading', {name: 'Current events'});
    await heading.isVisible();
  })

  test('should create an event', async ({page}) => {
    const uniqueName = `Test event ${Date.now()}`;
    await page.getByRole('main').getByRole('button').click();
    await page.getByPlaceholder('Enter title').fill(uniqueName);
    await page.getByPlaceholder('Enter description').fill("Event created during Playwright test");
    await page.getByRole('button', { name: 'Create' }).click();
    await expect(page.getByText(uniqueName)).toBeVisible();
  })
})

test.describe("Event edit", async () => {
  let uniqueName: string;
  test.beforeEach(async ({page}) => {
    uniqueName = `Test Event ${Date.now()}`;
    await createEvent(page, uniqueName, 'event');
    await page.getByRole('menuitem', { name: 'Edit event' }).click();
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

  test('should edit from date', async ({page}) => {
    await page.locator('div').filter({ hasText: /^Start:/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^Start:/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Start:/ }).getByRole('textbox').fill('11:00');
    await page.locator('div').filter({ hasText: /^End:/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^End:/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^End:/ }).getByRole('textbox').fill('12:00');
    await page.getByRole('button', { name: 'Edit' }).click();

    await expect(page.getByText("From 11:00")).toBeVisible();
    await expect(page.getByText("To 12:00")).toBeVisible();

  })
})

test.describe("Event delete", async () => {
  let uniqueName: string;
  test.beforeEach(async ({page}) => {
    uniqueName = `Test Event ${Date.now()}`;
    await createEvent(page, uniqueName, 'event');
  })

  test('should delete event', async ({page}) => {
    await page.getByRole('menuitem', {name: 'Delete'}).click();
    await page.getByRole('button', {name: 'Continue'}).click();

    await page.goto('http://localhost:5173/events');
    const notebook = page.getByText(uniqueName);
    await expect(notebook).not.toBeVisible();
  })
})

async function createEvent(page: Page, title: string, description: string) {
  await page.goto('http://localhost:5173/events');
  await page.getByRole('main').getByRole('button').click();
  await page.getByPlaceholder('Enter title').fill(title);
  await page.getByPlaceholder('Enter description').fill(description);
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText(title)).toBeVisible();
  await page.getByRole('link', { name: title }).click()
  await page.locator('[data-testid="menu-button"]').first().click();

}
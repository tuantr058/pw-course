import { test } from '@playwright/test';

test('Exercise 2: Product Page', async ({page}) => {
    await test.step('Navigate to Material Playwright Vietnam', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on Product Page', async () => {
        await page.locator(`//a[@href='02-xpath-product-page.html']`).click();
    });

    await test.step('Add 2 products 1', async () => {
        await page.locator(`//button[@data-product-id='1']`).click({clickCount: 2});
    });

    await test.step('Add 3 products 2', async () => {
        await page.locator(`//button[@data-product-id='2']`).click({clickCount: 3});
    });

    await test.step('Add 1 product 3', async () => {
        await page.locator(`//button[@data-product-id='3']`).click();
    });
});
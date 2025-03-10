import { test } from '@playwright/test';

test('Exercise 3: Todo Page', async ({page}) => {
    await test.step('Navigate to Material Playwright Vietnam', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on Todo Page', async () => {
        await page.locator(`//a[@href='03-xpath-todo-list.html']`).click();
    });

    await test.step('Perform adding tasks', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator(`//input[@id='new-task']`).fill(`Todo ${i}`);
            await page.locator(`//button[@id='add-task']`).click();
        };
    });

    await test.step('Delete odd tasks', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id='todo-${i}-delete']`).click();
            };
        };
    });
});
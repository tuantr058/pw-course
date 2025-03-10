import { test } from '@playwright/test';

const date = '2000-01-01';
const username = 'Tuan Tran';
const email = 'tuantran@example.com';
const desc = 'This is a biography!';
const country = 'australia';
const colorCode = '#73c6b6';

test('Exercise 1: Register Page', async ({page}) => {
    await test.step('Navigate to Material Playwright Vietnam', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on User Registration Page', async () => {
        await page.locator(`//a[@href='01-xpath-register-page.html']`).click();
    });

    await test.step('Perform register', async () => {
        // Username
        await page.locator(`//input[@id='username']`).fill(username);
        // Email
        await page.locator(`//input[@id='email']`).fill(email);
        // Gender
        await page.locator(`//input[@id='male']`).check();
        // Hobbies
        await page.locator(`//input[@id='traveling']`).check();
        // Interest
        await page.locator(`//option[@value='sports']`).click();
        // Country
        await page.selectOption(`//select[@id='country']`, country);
        // Date of birth
        await page.locator(`//input[@id='dob']`).fill(date);
        // Profile picture
        await page.locator(`//input[@id='profile']`).setInputFiles('data-test/bulbasaur.png');
        // Biography
        await page.locator(`//textarea[@id='bio']`).fill(desc);
        // Rate us
        await page.locator(`//input[@id='rating']`).press('ArrowRight');
        // Favorite color
        await page.locator(`//input[@id='favcolor']`).evaluate(el => {
            (el as HTMLInputElement).value = colorCode;
            el.dispatchEvent(new Event('input', {bubbles: true}));
            el.dispatchEvent(new Event('change', {bubbles: true}));
        });
        // Newsletter
        await page.locator(`//div[@class='tooltip']`).hover();
        // Enable feature
        await page.locator(`//span[@class='slider round']`).click();
    });

    await test.step('Click Register button', async () => {
        await page.locator(`//button[@type='submit']`).click();
    });
});
import { test } from '@playwright/test';

const notes = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'},
    {title: 'Title 5', content: 'Content 5'},
    {title: 'Title 6', content: 'Content 6'},
    {title: 'Title 7', content: 'Content 7'},
    {title: 'Title 8', content: 'Content 8'},
    {title: 'Title 9', content: 'Content 9'},
    {title: 'Title 10', content: 'Content 10'}
];

test('Exercise 4: Personal Notes Page', async ({page}) => {
    await test.step('Navigate to Material Playwright Vietnam', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on Personal Notes Page', async () => {
        await page.locator(`//a[@href='04-xpath-personal-notes.html']`).click();
    });

    await test.step('Add notes', async () => {
        for (let note of notes) {
            await page.locator(`//input[@id='note-title']`).fill(note.title);
            await page.locator(`//textarea[@id='note-content']`).fill(note.content);
            await page.locator(`//button[@id='add-note']`).click();
        };
    });
    
    await test.step('Search by title', async () => {
        await page.locator(`//input[@id='search']`).fill('8');
    });
});
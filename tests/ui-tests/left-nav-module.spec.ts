import { test, expect } from '../../fixtures/hooks-fixture';

test.describe('[Dashboard] Left side nav toggle test.', () => {
    test('Should collapse and expand side menu when toggle arrow is clicked.', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'testCaseLink'
        }
    }, async ({ gotoUrl, leftNavPage }) => {
        let expandedWidth: number;
        let collapsedWidth: number;
        
        await test.step('Validate sidebar is expanded by default', async () => {
            expandedWidth = await leftNavPage.getWidth();
            expect(expandedWidth).toBeGreaterThan(0);
        });

        await test.step('Click toggle and verify sidebar collapses..', async () => {
            await leftNavPage.toggle();
            await leftNavPage.waitUntilWidthLessThan(expandedWidth);
            collapsedWidth = await leftNavPage.getWidth();
            expect(collapsedWidth).toBeLessThan(expandedWidth);
        });

        await test.step('Click toggle again and verify sidebar expands back.', async () => {
            await leftNavPage.toggle();
            await leftNavPage.waitUntilWidthGreaterThan(collapsedWidth);
            const reExpandedWidth = await leftNavPage.getWidth();
            expect(reExpandedWidth).toBeGreaterThan(collapsedWidth);
        });
    });
});

test.describe('[Dashboard] Left side nav search functionality test.', () => {
    test('Should display only menu item(s) for search result.', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'testCaseLink'
        }
    }, async ({ gotoUrl, leftNavPage }) => {   
        const { searchInputField, pimMenuItem, performanceMenuItem } = leftNavPage;

        await test.step('When typing full match, shows both PIM and Performance.', async () => {
            await searchInputField.click();
            await searchInputField.fill('p');
            await expect(pimMenuItem).toBeVisible();
            await expect(performanceMenuItem).toBeVisible();
        });

        await test.step('When typing "pi" or "pim", shows only PIM.', async () => {
            await searchInputField.click();
            await searchInputField.fill('pi');
            await expect(pimMenuItem).toBeVisible();
            await expect(performanceMenuItem).toBeHidden();
            await searchInputField.fill('pim');
            await expect(pimMenuItem).toBeVisible();
            await expect(performanceMenuItem).toBeHidden();
        });

        await test.step('When typing "pe", shows only Performance.', async () => {
            await searchInputField.click();
            await searchInputField.fill('pe');
            await expect(performanceMenuItem).toBeVisible();
            await expect(pimMenuItem).toBeHidden();
        });
    });
});
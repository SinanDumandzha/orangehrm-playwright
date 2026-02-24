import { test, expect } from '../../fixtures/hooks-fixture';

test.describe('[Dashboard] Left side nav toggle test.', () => {
    test('should collapse and expand side menu when toggle arrow is clicked', {
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

        await test.step('Click toggle and verify sidebar collapses', async () => {
            await leftNavPage.toggle();
            await leftNavPage.waitUntilWidthLessThan(expandedWidth);
            collapsedWidth = await leftNavPage.getWidth();
            expect(collapsedWidth).toBeLessThan(expandedWidth);
        });

        await test.step('Click toggle again and verify sidebar expands back', async () => {
            await leftNavPage.toggle();
            await leftNavPage.waitUntilWidthGreaterThan(collapsedWidth);
            const reExpandedWidth = await leftNavPage.getWidth();
            expect(reExpandedWidth).toBeGreaterThan(collapsedWidth);
        });
    });
});
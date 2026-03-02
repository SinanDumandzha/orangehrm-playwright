import { test, expect } from '../../fixtures/hooks-fixture';

test.describe('[DASHBOARD] Verify that Help page open in a new tab when "?" button clicked.', 
    { 
        tag: ['@UI', '@UAT'], 
        annotation: {   
            type: 'Test Case Link', 
            description: 'testCaseLink' 
        } 
    }, 
    () => {
        test('Should open Help page in a new tab.', async ({
                gotoUrl,
                dashboardPage,
                context,
        }) => {
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                    dashboardPage.helpButton.click(),
                ]);

            await newPage.waitForLoadState();
            await expect(newPage).toHaveURL(`${process.env.HELP_URL}`);
            await expect(newPage).toHaveTitle(`${process.env.HELP_TITLE}`);
        });
    }
);
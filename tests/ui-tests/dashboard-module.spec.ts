import { test, expect } from '../../fixtures/hooks-fixture';
import rawWidgetsData from '../../data/ui-data/dashboard-module-data.json';

type DashboardData = {
    dashboard: {
        expectedWidgetTitles: string[];
    };
};

test.describe('[Dashboard] Verify that Help page open in a new tab when "?" button clicked.', 
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

test.describe('[Dashboard] Verify that all widgets at dashboard screen displayed.', 
    { 
        tag: ['@UI', '@UAT'], 
        annotation: {   
            type: 'Test Case Link', 
            description: 'testCaseLink' 
        } 
    },  
    () => {
    test('Should display correct widget titles (strict order).', async ({ gotoUrl, dashboardPage }) => {
        await dashboardPage.waitForLoaded();

        const dashboardData = rawWidgetsData as DashboardData;
        const expectedTitles = dashboardData.dashboard.expectedWidgetTitles;
        const actualTitles = await dashboardPage.getWidgetTitles();
        const widgetCount = await dashboardPage.getWidgetCount();

        expect(widgetCount).toBe(expectedTitles.length);
        expect(actualTitles).toEqual(expectedTitles);
    });
})
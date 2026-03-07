import { test, expect } from '../../fixtures/hooks-fixture';
import rawDashboardData from '../../data/ui-data/dashboard-module-data.json';

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

        const dashboardData = rawDashboardData as DashboardData;
        const expectedTitles = dashboardData.dashboard.expectedWidgetTitles;
        const actualTitles = await dashboardPage.getWidgetTitles();
        const widgetCount = await dashboardPage.getWidgetCount();

        expect(widgetCount).toBe(expectedTitles.length);
        expect(actualTitles).toEqual(expectedTitles);
    });
})

test.describe(
    "[Dashboard] Verify footer texts and OrangeHRM link.",
    {
        tag: ["@UI", "@UAT"],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink",
        },
    },
    () => {
        test("Should display correct footer text and open OrangeHRM site in new tab.", async ({
            gotoUrl,
            dashboardPage,
            context,
        }) => {
            await dashboardPage.waitForLoaded();
            await dashboardPage.scrollToFooter();
            await expect(dashboardPage.footer).toBeVisible();

            const footerText = await dashboardPage.getFooterText();
            expect(footerText).toContain(rawDashboardData.dashboard.footer.productName);
            expect(footerText).toContain(rawDashboardData.dashboard.footer.copyright);
            expect(footerText).toContain(rawDashboardData.dashboard.footer.company);

            await expect(dashboardPage.orangeHRMOS).toBeVisible();
            await expect(dashboardPage.orangeHRMLink).toBeVisible();
            await expect(dashboardPage.copyrightText).toBeVisible();

            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                dashboardPage.orangeHRMLink.click(),
            ]);
            await newPage.waitForLoadState();
            await expect(newPage).toHaveURL(rawDashboardData.dashboard.footer.orangeHRMLink);
        });
    }
);
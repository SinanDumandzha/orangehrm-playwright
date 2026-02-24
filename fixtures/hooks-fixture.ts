import { LeftNavPage } from '../pages/LeftNavPage';
import { test as baseTest } from './common-fixture';

type HooksFixtureType = {
    gotoUrl: void;
    logout: void;
    leftNavPage: LeftNavPage;
}

export const test = baseTest.extend<HooksFixtureType>({
    gotoUrl: async({ loginPage }, use) => {
        await loginPage.gotoOrangeHrm();
        await use();
    },
    logout: async({ userPage }, use) => {
        await use();
        await userPage.logout();
    }, 
    leftNavPage: async ({ page }, use) => {
        const leftNavPage = new LeftNavPage(page);
        await leftNavPage.waitForVisible();
        await use(leftNavPage);
    }
});

export { expect } from '@playwright/test';
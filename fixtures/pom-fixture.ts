import { test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavPage } from '../pages/LeftNavPage';
import { PimPage } from '../pages/PimPage';
import { Toast } from '../pages/components/Toast';

type PomFixturesType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavPage: LeftNavPage;
    pimPage: PimPage;
    toast: Toast;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async({page}, use) => {
        await use(new DashboardPage(page));
    },
    userPage: async({page}, use) => {
        await use(new UserPage(page));
    },
    leftNavPage: async({page}, use) => {
        await use(new LeftNavPage(page));
    },
    pimPage: async({page}, use) => {
        await use(new PimPage(page));
    },
    toast: async ({ page }, use) => {
        await use(new Toast(page));
    }
});
import { test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavPage } from '../pages/LeftNavPage';
import { PimPage } from '../pages/PimPage';
import { MyInfoPage } from '../pages/MyInfoPage';
import { Header } from '../pages/components/Header';
import { Toast } from '../pages/components/Toast';

type PomFixturesType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavPage: LeftNavPage;
    pimPage: PimPage;
    myInfoPage: MyInfoPage;
    header: Header;
    toast: Toast;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async({ page }, use) => {
        await use(new DashboardPage(page));
    },
    userPage: async({ page }, use) => {
        await use(new UserPage(page));
    },
    leftNavPage: async({ page }, use) => {
        await use(new LeftNavPage(page));
    },
    pimPage: async({ page }, use) => {
        await use(new PimPage(page));
    },
    myInfoPage: async ({ page }, use) => {
        await use(new MyInfoPage(page));
    },
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    toast: async ({ page }, use) => {
        await use(new Toast(page));
    }
});
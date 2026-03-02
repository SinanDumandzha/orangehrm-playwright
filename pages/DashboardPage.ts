import { Locator, Page } from "@playwright/test";


export class DashboardPage{
    readonly page: Page;
    readonly dashboardTitleText: Locator;
    readonly helpButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboardTitleText = page.getByRole('heading', { name: 'Dashboard' });
        this.helpButton = page.getByTitle('Help');
    }
}
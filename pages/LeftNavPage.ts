import { Locator, Page } from "@playwright/test";

export class LeftNavPage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly brandLogo: Locator;
    readonly leftNavMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.brandLogo = page.locator('.oxd-brand img');
        this.leftNavMenu = page.locator('.oxd-sidepanel-body');
    }

    /**
     * Open PIM module
     */
    async openPimModule(){
        await this.pimLink.click();
    }
}
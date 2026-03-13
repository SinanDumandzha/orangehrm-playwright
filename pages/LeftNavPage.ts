import { Locator, Page, expect } from "@playwright/test";

export class LeftNavPage{
    readonly page: Page;
    readonly pimMenuItem: Locator;
    readonly myInfoMenuItem: Locator;
    readonly buzzMenuItem: Locator;
    readonly brandLogo: Locator;
    readonly sidebar: Locator;
    readonly toggleButton: Locator;
    readonly leftNavMenu: Locator;
    readonly searchInputField: Locator;
    readonly performanceMenuItem: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimMenuItem = page.getByRole('link', { name: 'PIM' });
        this.myInfoMenuItem = page.getByRole('link', { name: 'My Info' });
        this.buzzMenuItem = page.getByRole('link', { name: 'Buzz' });
        this.brandLogo = page.getByRole('link', { name: 'client brand banner' });
        this.sidebar = page.locator('.oxd-sidepanel');
        this.toggleButton = page.locator('.oxd-main-menu-search button.oxd-icon-button');
        this.leftNavMenu = page.locator('.oxd-sidepanel-body');
        this.searchInputField = page.getByRole('textbox', { name: 'Search' });
        this.performanceMenuItem = page.getByRole('link', { name: 'Performance' })
    }

    async toggle(): Promise<void> {
        await this.toggleButton.click();
    }

    async waitForVisible(): Promise<void> {
        await expect(this.sidebar).toBeVisible({ timeout: 15000 });
    }

    async getWidth(): Promise<number> {
        const width = await this.sidebar.evaluate(el =>
            parseFloat(getComputedStyle(el).width)
        );
        return width;
    }

    async isCollapsed(): Promise<boolean> {
        const width = await this.getWidth();
        return width === 0;
    }

    async isExpanded(): Promise<boolean> {
        const width = await this.getWidth();
        return width > 0;
    }

    async waitUntilWidthLessThan(value: number): Promise<void> {
        await expect
        .poll(async () => await this.getWidth())
        .toBeLessThan(value);
    }

    async waitUntilWidthGreaterThan(value: number): Promise<void> {
        await expect
        .poll(async () => await this.getWidth())
        .toBeGreaterThan(value);
    }

    async waitUntilCollapsed(): Promise<void> {
        await expect
        .poll(async () => await this.getWidth())
        .toBe(0);
    }

    async waitUntilExpanded(): Promise<void> {
        await expect
        .poll(async () => await this.getWidth())
        .toBeGreaterThan(0);
    }

    /**
     * Open PIM module
     */
    async openPimModule(): Promise<void> {
        await expect(this.pimMenuItem).toBeVisible({ timeout: 10000 });
        await this.pimMenuItem.click();
    }

    /**
     * Open MyInfo module
     */
    async openMyInfoModule(): Promise<void> {
        await expect(this.myInfoMenuItem).toBeVisible({ timeout: 10000 });
        await this.myInfoMenuItem.click();
    }

    /**
     * Open Buzz module
     */
    async openBuzzModule(): Promise<void> {
        await expect(this.buzzMenuItem).toBeVisible({ timeout: 10000 });
        await this.buzzMenuItem.click();
    }
}
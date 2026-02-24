import { Locator, Page, expect } from "@playwright/test";

export class LeftNavPage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly brandLogo: Locator;
    readonly sidebar: Locator;
    readonly toggleButton: Locator;
    readonly leftNavMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.brandLogo = page.getByRole('link', { name: 'client brand banner' });
        this.sidebar = page.locator('.oxd-sidepanel');
        this.toggleButton = page.locator('.oxd-main-menu-search button.oxd-icon-button');
        this.leftNavMenu = page.locator('.oxd-sidepanel-body');
    }

    async toggle(): Promise<void> {
        await this.toggleButton.click();
    }

    async waitForVisible(): Promise<void> {
        await expect(this.sidebar).toBeVisible();
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
        await this.pimLink.click();
    }
}
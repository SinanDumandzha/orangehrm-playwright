import { Locator, Page } from "@playwright/test";

export class DashboardPage{
    readonly page: Page;
    readonly dashboardTitleText: Locator;
    readonly helpButton: Locator;
    readonly dashboardGrid: Locator;
    readonly widgets: Locator;
    readonly widgetTitles: Locator;

      readonly footer: Locator;
  readonly orangeHRMOS: Locator;
  readonly copyrightText: Locator;
  readonly orangeHRMLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboardTitleText = page.getByRole('heading', { name: 'Dashboard' });
        this.helpButton = page.getByTitle('Help');
        this.dashboardGrid = page.locator('.oxd-grid-3.orangehrm-dashboard-grid');
        this.widgets = this.dashboardGrid.locator(
          '.oxd-grid-item.orangehrm-dashboard-widget'
        );
        this.widgetTitles = this.widgets.locator(
          '.orangehrm-dashboard-widget-name .oxd-text.oxd-text--p'
        );
        this.footer = page.locator("oxd-layout-footer");
        this.orangeHRMOS = page.getByText("OrangeHRM OS");
        this.orangeHRMLink = page.getByRole("link", { name: "OrangeHRM, Inc" });
        this.copyrightText = page.getByText("© 2005 - 2026 OrangeHRM, Inc");
    }

    async waitForLoaded() {
        await this.dashboardGrid.waitFor({ state: 'visible' });
    }

    async getWidgetTitles(): Promise<string[]> {
        return this.widgetTitles.allTextContents();
    }
    
    async getWidgetCount(): Promise<number> {
        return this.widgets.count();
    }

    async getFooterText(): Promise<string> {
        return this.footer.innerText();
  }
}
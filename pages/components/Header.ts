import { Page, Locator } from "@playwright/test";

export class Header{
    readonly page: Page;
    readonly userDropdownIcon: Locator;
    readonly dropdownMenu: Locator;
    readonly aboutMenuItem: Locator;
    readonly supportMenuItem: Locator;
    readonly changePasswordMenuItem: Locator;
    readonly logoutMenuItem: Locator;
    readonly aboutDialogBody: Locator;
    readonly aboutDialog: Locator;
    readonly aboutHeading: Locator;
    readonly companyLabel: Locator;
    readonly versionLabel: Locator;
    readonly activeEmployeesLabel: Locator;
    readonly terminatedEmployeesLabel: Locator;
    readonly companyNameValue: Locator;
    readonly versionValue: Locator;
    readonly closeAboutDialogBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.userDropdownIcon = page.locator(".oxd-userdropdown-tab");
        this.dropdownMenu = page.locator(".oxd-dropdown-menu");
        this.aboutMenuItem = page.getByRole("menuitem", { name: "About" });
        this.supportMenuItem = page.getByRole("menuitem", { name: "Support" });
        this.changePasswordMenuItem = page.getByRole("menuitem", { name: "Change Password" });
        this.logoutMenuItem = page.getByRole("menuitem", { name: "Logout" });
        this.aboutDialogBody = page.locator(".oxd-dialog-sheet");
        this.aboutDialog = page.getByRole("dialog");
        this.aboutHeading = page.getByRole("heading", { name: "About" });
        this.companyLabel = page.getByText("Company Name:");
        this.versionLabel = page.getByText("Version:");
        this.activeEmployeesLabel = page.getByText("Active Employees:");
        this.terminatedEmployeesLabel = page.getByText("Employees Terminated:");
        this.companyNameValue = page.getByText("OrangeHRM", { exact: true });
        this.versionValue = page.getByRole("dialog").getByText("OrangeHRM OS");
        this.closeAboutDialogBtn = page.getByRole("button", { name: "×" });
    }

    async openUserDropdown() {
        await this.userDropdownIcon.click();
    }

    async openAboutDialog() {
        await this.aboutMenuItem.click();
    }

    async clickSupport() {
        await this.supportMenuItem.click();
    }

    async clickChangePassword() {
        await this.changePasswordMenuItem.click();
    }

    async clickLogout() {
        await this.logoutMenuItem.click();
    }

    async closeAboutDialog() {
        await this.closeAboutDialogBtn.click();
    }

    async getAboutDialogText() {
        await this.aboutDialogBody.waitFor();
        return await this.aboutDialogBody.innerText();
    }
}
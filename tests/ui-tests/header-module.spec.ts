import { test, expect } from '../../fixtures/hooks-fixture';
import headerData from '../../data/ui-data/header-data.json';

const { dropdownMenuItems, aboutDialog, urls } = headerData.userDropdownMenu;

test.describe("[Header] User Dropdown Menu", () => {
    test("Verify dropdown menu items.", async ({ gotoUrl, header }) => {
        await header.openUserDropdown();

        for (const item of dropdownMenuItems) {
            await expect(
                header.page.getByRole("menuitem", { name: item })
            ).toBeVisible();
        }
    });
});

test.describe("[Header] User Dropdown - About", () => {
    test("Verify About dialog content.", async ({ gotoUrl, header }) => {
        const { heading, version } = aboutDialog;

        await header.openUserDropdown();
        await header.openAboutDialog();

        await expect(header.aboutHeading).toBeVisible();
        await expect(header.aboutDialog).toBeVisible();
        await expect(header.aboutHeading).toHaveText(heading);
        await expect(header.companyLabel).toBeVisible();
        await expect(header.versionLabel).toBeVisible();
        await expect(header.activeEmployeesLabel).toBeVisible();
        await expect(header.terminatedEmployeesLabel).toBeVisible();
        await expect(header.companyNameValue).toBeVisible();
        await expect(header.versionValue).toContainText(version);
        
        await header.closeAboutDialog();
    });
});

test("[Header] User Dropdown - Verify Support link navigation.", async ({ gotoUrl, header, page }) => {
    await header.openUserDropdown();
    await header.clickSupport();

    await expect(header.supportHeading).toBeVisible();
    await expect(header.supportTitle).toBeVisible();
    await expect(header.supportEmail).toBeVisible();
    await expect(page).toHaveURL(new RegExp(urls.support));
});

test("[Header] User Dropdown - Verify Change Password navigation.", async ({ gotoUrl, header, page }) => {
    await header.openUserDropdown();
    await header.clickChangePassword();

    await expect(page).toHaveURL(new RegExp(urls.changePassword));
    await expect(header.changePasswordHeading).toBeVisible();
    await expect(header.usernameTitle).toBeVisible();
    await expect(header.currentPasswordTitle).toBeVisible();
    await expect(header.currentPasswordTextBox).toBeVisible();
    await expect(header.passwordTitle).toBeVisible();
    await expect(header.passwordTextBox).toBeVisible();
    await expect(header.confirmPasswordTitle).toBeVisible();
    await expect(header.confirmPasswordTextBox).toBeVisible();
    await expect(header.requiredText).toBeVisible();
    await expect(header.changePasswordCancelButton).toBeVisible();
    await expect(header.changePasswordSaveButton).toBeVisible();
});

test("[Header] User Dropdown - Verify Logout navigation.", async ({ gotoUrl, header, page }) => {
    await header.openUserDropdown();
    await header.clickLogout();

    await expect(page).toHaveURL(new RegExp(urls.login));
});
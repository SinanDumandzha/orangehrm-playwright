import { test, expect } from '../../fixtures/hooks-fixture';
import headerData from '../../data/ui-data/header-data.json';

test.describe("[Header] User Dropdown Menu", () => {
    test("Verify dropdown menu items.", async ({ gotoUrl, header }) => {
        await header.openUserDropdown();

        const { dropdownMenuItems} = headerData.userDropdownMenu;

        for (const item of dropdownMenuItems) {
            await expect(
                header.page.getByRole("menuitem", { name: item })
            ).toBeVisible();
        }
    });
});

test.describe("[Header] User Dropdown - About", () => {
    test("Verify About dialog content.", async ({ gotoUrl, header }) => {
        const { heading, version } = headerData.userDropdownMenu.aboutDialog;

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

test("Verify Support link navigation.", async ({ gotoUrl, header, page }) => {
    await header.openUserDropdown();
    await header.clickSupport();

    await expect(header.supportHeading).toBeVisible();
    await expect(header.supportTitle).toBeVisible();
    await expect(header.supportEmail).toBeVisible();
    await expect(page).toHaveURL(new RegExp(headerData.userDropdownMenu.urls.support));
});
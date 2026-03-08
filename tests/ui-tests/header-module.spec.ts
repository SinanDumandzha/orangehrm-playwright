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
import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixture';

test('Temp test1', async({ page, gotoUrl })=>{
    // await loginPage.gotoOrangeHrm();
    console.log(await page.title());
});

test('Temp test2', async({ page, gotoUrl })=> {
    expect(page).toHaveTitle('OrangeHRM');
});

test('Temp test3', async({ page, gotoUrl })=> {
    expect(page).toHaveTitle('OrangeHRM');
});
import { test, expect } from '../../fixtures/hooks-fixture';
import pimModuleData from '../../data/ui-data/pim-module-data.json';
import { getRandomNumber } from '../../utils/CommonUtils';

test('[PIM] Verify that a new employee is successfully created under the PIM module.', { 
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'testCaseLink' // test case link from PM/TM software
    }
}, async({ gotoUrl, leftNavPage, pimPage}) => {
    await test.step("Open PIM module", async() => {
        await leftNavPage.openPimModule();
    });

    await test.step("Add an employee", async() => {
        const randomUserId = getRandomNumber(1000, 99999);
        await pimPage.addEmployee(pimModuleData.first_name, pimModuleData.middle_name, pimModuleData.last_name, randomUserId);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
    });
});
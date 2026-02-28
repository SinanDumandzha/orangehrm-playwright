import { test, expect } from '../../fixtures/hooks-fixture';
import rawPimModuleEmployeeData from '../../data/ui-data/pim-module-employee-data.json';
import { getRandomNumber } from '../../utils/CommonUtils';

interface RawPimEmployee {
    first_name: string;
    middle_name: string;
    last_name: string;
}

interface PimEmployee {
    firstName: string;
    middleName: string;
    lastName: string;
}

const rawEmployees: RawPimEmployee[] = Array.isArray(rawPimModuleEmployeeData)
    ? rawPimModuleEmployeeData
    : [rawPimModuleEmployeeData];

const employees: PimEmployee[] = rawEmployees.map(
    ({ first_name, middle_name, last_name }) => ({
        firstName: first_name,
        middleName: middle_name,
        lastName: last_name,
    })
);

test.describe('[PIM] Verify that new employees are successfully added under the PIM module', 
    { 
        tag: ['@UI', '@UAT'], 
        annotation: {   
            type: 'Test Case Link', 
            description: 'testCaseLink' 
        } 
    }, 
    () => {
        for (const { firstName, middleName, lastName } of employees) {
            test(`Add employee: ${firstName} ${middleName} ${lastName}`, async ({ gotoUrl, leftNavPage, pimPage }) => {
                await test.step('Open PIM module', async () => {
                    await leftNavPage.openPimModule();
                });

                await test.step('Add employee and verify', async () => {
                    const randomUserId = getRandomNumber(1000, 99999);
                    await pimPage.addEmployee(firstName, middleName, lastName, randomUserId);
                    await expect(pimPage.newEmployeeNameHeading)
                    .toHaveText(`${firstName} ${lastName}`);
                });
            });
        }
    }
);

test.describe('[PIM] - Success Toast Validation', 
    { 
        tag: ['@UI', '@UAT'], 
        annotation: {   
            type: 'Test Case Link', 
            description: 'testCaseLink' 
        } 
    }, 
    () => {
        test('Should display green success toast after saving employee.', async ({
            gotoUrl,
            leftNavPage,
            pimPage,
            toast,
        }) => {
            const { firstName, middleName, lastName } = employees[0];

            await test.step('Open PIM module.', async () => {
                await leftNavPage.openPimModule();
            });

            await test.step('Add employee.', async () => {
                const randomUserId = getRandomNumber(1000, 99999);
                await pimPage.addEmployee(firstName, middleName, lastName, randomUserId);
                await toast.expectSuccess('Successfully Saved');
                await toast.waitForDisappear();
            })
        });
    }
);
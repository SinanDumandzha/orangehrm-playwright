import { test, expect } from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({storageState: {
    cookies: [],
    origins: []
    }
});

test.describe("Invalid Login Test", {
        tag: '@InvalidLogin',
        annotation: {
            type: 'Story Link',
            description: 'storyLink' // Story link from PM/TM software
        }
    },
    () => {
    test('[Login] Verify that the user can not log in with an invalid username.', { 
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'testCaseLink' // test case link from PM/TM software
        }
    }, async({ gotoUrl, loginPage, commonUtils }) => {
        await test.step("Try to login with invalid username", async() => {
            const password = commonUtils.decryptData(process.env.PASSWORD!);
            await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
            await expect(loginPage.invalidCredsErrorMessage).toHaveText(loginModuleData.invalid_creds_error_message);
            await expect(loginPage.userNameInput).toBeVisible();
        });    
    });

    test('[Login] Verify that the user can not log in with an invalid password.', { 
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'testCaseLink' // test case link from PM/TM software
        }
    }, async({ gotoUrl, loginPage, commonUtils }) => {
        await test.step("Try to login with invalid password", async() => {
            const username = commonUtils.decryptData(process.env.USER_NAME!);
            await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
            await expect(loginPage.invalidCredsErrorMessage).toHaveText(loginModuleData.invalid_creds_error_message);
            await expect(loginPage.userNameInput).toBeVisible();
        });      
    });

    test('[Login] Verify that the user can not log in with an invalid username and invalid password.', { 
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'testCaseLink' // test case link from PM/TM software
        }
    }, async({ gotoUrl, loginPage }) => {
        await test.step("Try to login with invalid username and invalid password", async() => {
            await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
            await expect(loginPage.invalidCredsErrorMessage).toHaveText(loginModuleData.invalid_creds_error_message);
            await expect(loginPage.userNameInput).toBeVisible();
        });      
    });
});
import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly employeeIdTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page){
        this.page= page;
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdTextBox = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');
    }

    /**
     * Add new employee
     * @param firstName 
     * @param middleName 
     * @param lastName 
     * @param employeeId 
     */
    async addEmployee(firstName: string, middleName:string, lastName: string, employeeId: number){
        await this.addButton.click();
        await this.firstNameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.employeeIdTextBox.fill(employeeId.toString());
        await this.saveButton.click();
    }
}
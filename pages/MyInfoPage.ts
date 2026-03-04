import { Locator, Page } from "@playwright/test";
import path from 'path';

export class MyInfoPage {
    readonly page: Page;
    readonly profilePictureMenuItem: Locator;
    readonly profilePicture: Locator;
    readonly addPicturePlusButton: Locator;
    readonly fileInput: Locator;
    readonly chooseFileButton: Locator;
    readonly saveButton: Locator; 

    constructor(page: Page){
        this.page = page;
        this.profilePictureMenuItem = page.getByRole('img', { name: 'profile picture' }).nth(1);
        this.profilePicture = page.locator('form').getByRole('img', { name: 'profile picture' });
        this.addPicturePlusButton =  page.getByRole('button').nth(4);
        this.fileInput = page.locator('input[type="file"]');
        this.chooseFileButton = page.getByRole('button', { name: 'Choose File' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }
  
    async openProfilePictureSettings() {
        await this.profilePictureMenuItem.click();
    }

    async clickProfilePicture() {
        await this.profilePicture.click();
    }

    async clickAddPictureButton() {
        await this.addPicturePlusButton.click();
    }

    async uploadProfilePicture(fileName: string) {
        console.log(`../data/assets/${fileName}`);
        const filePath = path.resolve(__dirname, `../data/assets/${fileName}`);
        await this.fileInput.setInputFiles(filePath);
    }

    async getProfilePictureSrc(): Promise<string | null> {
        return this.profilePicture.getAttribute('src');
    }

    async save() {
        await this.saveButton.click();
    }
}
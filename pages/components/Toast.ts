import { Page, expect } from '@playwright/test';

export class Toast {
    constructor(private page: Page) {}

    private toastContainer = () => this.page.locator('.oxd-toast');
    private successToast = () => this.page.locator('.oxd-toast--success');
    private errorToast = () => this.page.locator('.oxd-toast--error');

    async expectSuccess(message: string) {
        await expect(this.successToast()).toBeVisible();
        await expect(this.successToast()).toContainText(message);
    }

    async expectError(message: string) {
        await expect(this.errorToast()).toBeVisible();
        await expect(this.errorToast()).toContainText(message);
    }

    async waitForDisappear() {
        await expect(this.toastContainer()).toBeHidden({ timeout: 10000 });
    }
}
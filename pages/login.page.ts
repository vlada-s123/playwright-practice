import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    loginPageUrl:string;
    emailField:Locator;
    passwordField:Locator;
    submitButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.loginPageUrl = '/auth/login';
        this.emailField = this.page.locator('#email');
        this.passwordField = this.page.locator('#password');
        this.submitButton = this.page.getByTestId('login-submit');
    }

    async login (email:string, password:string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
    }
}
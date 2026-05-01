import { test, expect } from '@playwright/test';

test ('Login test', async ({page}) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('#email').fill('customer@practicesoftwaretesting.com');
    await page.locator('#password').fill('welcome01');
    await page.getByTestId('login-submit').click();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    await expect(page.getByTestId('page-title')).toHaveText('My account');
    await expect(page.getByTestId('nav-menu')).toHaveText('Jane Doe');

});
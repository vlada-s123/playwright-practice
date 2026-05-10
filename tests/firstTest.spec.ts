import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Account } from '../pages/account.page';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';

test ('Login test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const accountPage = new Account(page);
    const homePage = new HomePage(page);

    test.skip(!!process.env.CI, 'Skipping this test on CI due to environment constraints');

    await page.goto(loginPage.loginPageUrl);
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

    await expect(page).toHaveURL(accountPage.accountPageUrl);
    await expect(homePage.header.pageTitle).toHaveText('My account');
    await expect(homePage.header.navMenu).toHaveText('Jane Doe');
});

 test ('Verify user can view product details', async ({page}) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await page.goto(homePage.homePageUrl);
    await productPage.viewProductDetails('Combination Pliers');
    await expect(page).toHaveURL(/product/);
    await expect(productPage.productName).toContainText('Combination Pliers');
    await expect(productPage.productPrice).toContainText('14.15');
    await expect(productPage.addToCartButton).toBeVisible();
    await expect(productPage.addToFavorites).toBeVisible();
 });


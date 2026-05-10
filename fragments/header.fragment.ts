import { Locator, Page } from "@playwright/test";
export class HeaderFragment{
    page: Page;
    pageTitle: Locator;
    navMenu: Locator;
    constructor(page: Page){
        this.page = page;
        this.pageTitle = page.getByTestId('page-title');
        this.navMenu = page.getByTestId('nav-menu');
    }
}
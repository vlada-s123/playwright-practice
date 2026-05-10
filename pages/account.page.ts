import{ Page } from "@playwright/test";

export class Account {    
    page: Page;
    accountPageUrl:string;
    constructor(page: Page){
        this.page = page;
        this.accountPageUrl = '/account';
    }
} 
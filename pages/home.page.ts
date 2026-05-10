import { Page } from "@playwright/test";
import { HeaderFragment } from "../fragments/header.fragment";


export class HomePage {
    page:Page;
    homePageUrl: string;
    header: HeaderFragment;
    
    constructor(page: Page){
        this.page = page;
        this.homePageUrl = '/'
        this.header = new HeaderFragment(page)
    }
}
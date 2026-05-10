import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "../fragments/header.fragment";


export class ProductPage {
    page:Page;
    productPageUrl: string;
    header: HeaderFragment;
    productName: Locator;
    productPrice: Locator;
    addToCartButton: Locator;
    addToFavorites: Locator;
    constructor(page: Page){
        this.page = page;
        this.productPageUrl = '/product'
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.addToCartButton = page.getByTestId('add-to-cart');
        this.addToFavorites = page.getByTestId('add-to-favorites');
    }

    async viewProductDetails (name:string): Promise <void>{
        await this.productName.getByText(name).click();
    }
}
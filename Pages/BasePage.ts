import {Page,Locator,except} from '@playwright/test';

export abstract class BasePage{
    constructor(protected readonly page:Page){ }

    protected async goToUrl(path: string){
        await this.page.goto(path);
    }

    protected async basePageClick(selector: string | Locator){
        await this.toLocator(selector).click

    }
}
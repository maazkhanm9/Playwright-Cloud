import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { Dashboard } from "./Dashboard";

export default class ManagePage{
    constructor (private readonly page:Page){
    }
    private _login?:LoginPage;
    private _dashboard?:Dashboard;

    get loginPage(): LoginPage{
        if(!this._login){
            this._login = new LoginPage(this.page);
        }
        return this._login;
    }
    get dashboard(): Dashboard{
        return this._dashboard ?? = new Dashboard(this.page);
    }
}
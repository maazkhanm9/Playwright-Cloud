import { test } from "@playwright/test";
import userData from "../test-Data/userData.json";

import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/Dashboard";

test("Login and Dashboard testing", async ({ page }) => {

    const consolePage = new LoginPage();
    const dashboardPage = new DashboardPage();

    // Login
    await consolePage.login(page, userData);

    // Continue with the SAME page
    await dashboardPage.openVirtualMachines(page);

});
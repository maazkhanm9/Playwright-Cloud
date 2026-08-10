import { Page, expect,Locator } from "@playwright/test";

export class DashboardPage {

    async openVirtualMachines(page: Page) {
    const computeButton = page
  .getByRole('button', { name: 'Compute' })
  .locator('visible=true').click();
    const VM=await page.getByText("Virtual Machines").click();
    await expect (page.getByRole("heading",{name: 'Virtual Machines'})).toBeVisible();
}}
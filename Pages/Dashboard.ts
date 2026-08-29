import { Page, expect } from "@playwright/test";

export class DashboardPage {
  async openVirtualMachines(page: Page) {
    // NOTE: .click() must run on the resolved, visible locator itself —
    // chaining .click() before assigning to a const stored an unawaited
    // Promise<void> in `computeButton`, not the button locator.
    const computeButton = page
      .getByRole("button", { name: "Compute" })
      .locator("visible=true");
    await computeButton.click();

    const virtualMachinesLink = page.getByText("Virtual Machines");
    await virtualMachinesLink.click();

    await expect(
      page.getByRole("heading", { name: "Virtual Machines" })
    ).toBeVisible();
  }
}
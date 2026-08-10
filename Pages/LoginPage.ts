import { Page, expect } from "@playwright/test";
//import userData from "../test-Data/userData.json";


export class ConsolePage {

    async login(page: Page, userData: any) {
  await page.goto("https://console-qa.coredge.internal/");

  // Locator auto-waits and auto-retries until the element is visible
  const dashboard = page.getByText("Cloud Console");
  await expect(dashboard).toBeVisible();

  console.log("Page title:", await page.title());

  const loginButton=page.getByRole('button',{name :'Login'})
  await loginButton.click();
 await expect(page).toHaveURL(/auth/);
 await expect(
    page.getByRole("heading", { name: /sign in to your account/i })
  ).toBeVisible();
await page
  .getByPlaceholder("Enter Username or Email ID")
  .fill(userData.username);

const pass=await page.getByPlaceholder('Enter Password').fill(userData.password);


await page.locator("input[value='Sign In']").click();
await expect(
  page.getByRole('heading', {
    name: 'Welcome to Your Cloud Dashboard'
  })
).toBeVisible();

}
  
}
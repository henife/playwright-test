import {test, expect, Locator} from "@playwright/test"

test("playwright locstors", async ({page})=>{
    
    await page.goto("https://practice.expandtesting.com/");

    const logo : Locator = page.getByAltText("Best Website for")
   await expect(logo).toBeVisible();

   // await expect(page.getByText("Welcome to our store")).toBeVisible();


   // await page.getByRole("link", { name: 'Register' }).click();
   // await expect(page.getByRole("heading", { name: 'Register' })).toBeVisible();

})


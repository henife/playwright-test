import {test, expect, Locator} from "@playwright/test";
test("nopcommerce test", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    const logo = page.locator('.header-logo');
    await expect(logo).toBeVisible();

})
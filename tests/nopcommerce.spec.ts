import {test, expect, Locator} from "@playwright/test";
test("nopcommerce test", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    const logo : Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

})
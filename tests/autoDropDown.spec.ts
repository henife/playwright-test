import {expect, Locator, test} from "@playwright/test";
test("Auto Drop Down Test", async ({page}) => {

    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("smart");

    
    
});
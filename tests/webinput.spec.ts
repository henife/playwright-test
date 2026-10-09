import {test, expect, Locator} from "@playwright/test";
test("web input test", async ({page})=>{

    await page.goto("https://practice.expandtesting.com/inputs");

   await page.getByLabel('Input: Number').fill('123');
    await page.getByLabel('Input: Text').fill('test');

});

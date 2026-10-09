import {test, expect, Locator} from "@playwright/test";
test("web input test", async ({page})=>{

    await page.goto("https://practice.expandtesting.com/");

    await page.getByRole("link" , { name: 'Web inputs' }).click();

    await page.locator('input[type="number"]').fill('123');

    await page.getByLabel('Input: Text').fill('test');

    await page.getByLabel('Input: Password').fill('123!');

});

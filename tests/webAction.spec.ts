import { test, Locator, expect} from "@playwright/test";

test('web actiom', async ({ page }) => {


await page.goto("https://testautomationpractice.blogspot.com/");

const textBook: Locator = page.locator("#name");
await expect(textBook).toBeVisible();
await expect(textBook).toBeEnabled();
const maxLength: string | null = await textBook.getAttribute("maxlength");

await textBook.fill("John Lock");
const inputValue: string = await textBook.inputValue();
console.log("input value of the name", inputValue);
expect(inputValue).toBe("John Lock");

await page.waitForTimeout(2000);



});
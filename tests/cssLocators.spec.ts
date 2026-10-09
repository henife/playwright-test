import{test, expect, Locator} from "@playwright/test";

test('CSS locator example', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    
  //  const searchBox: Locator = page.locator("input#small-searchterms")
 //  await searchBox.fill("skirts");

    await page.locator("input#small-searchterms").fill("skirts");
    
});
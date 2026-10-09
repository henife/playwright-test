import {test, expect, Locator} from "@playwright/test";

test("xpath practice", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const logo: Locator = page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a/img");
    await expect(logo).toBeVisible();



    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productCount: number = await products.count();
    console.log("Number of products found:", productCount);
    expect(productCount).toBeGreaterThan(0);
    console.log("First computer related product:", await products.first().textContent());
    console.log("last computer related product:", await products.last().textContent());
    console.log("third computer related product:", await products.nth(2).textContent());


    let allProductsText: string[] = await products.allTextContents();
    for( let pt of allProductsText) {
        console.log("Product:", pt);
    }



    const buildingProducts: Locator = await page.locator("//h2/a[starts-with(@href,'/build')]");
    const count : number = await buildingProducts.count();
    expect(count).toBeGreaterThan(0); 



    const register: Locator = page.locator("//a[@href='/register']");
    await expect(register).toBeVisible();


    const last: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(last).toBeVisible();
})
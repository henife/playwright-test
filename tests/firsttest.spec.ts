test("verify page title",async ({page})=>{
    await page.goto("https://app.outlier.ai/login?redirect_url=%2Fexpert%2Fonboarding%2Fresume-collection&clear=1");
    let title : string = await page.title();
    console.log("title is: ",title);
    await expect(page).toHaveTitle("Outlier");
})

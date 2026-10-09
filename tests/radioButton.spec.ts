import{test, Locator, expect} from "@playwright/test";

test('radio button test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleradioButton: Locator = page.locator("#male");
    await expect(maleradioButton).toBeVisible();

    await maleradioButton.check();
    expect(await maleradioButton.isChecked()).toBe(true);

    await page.waitForTimeout(2000);
    
});

test.only('check box', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckbox: Locator = page.getByLabel('Sunday');
    sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();


    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayCheckboxes: Locator[] = days.map(index => page.getByLabel(index));
     expect(dayCheckboxes.length).toBe(7);

  //   for (const dayCheckbox of dayCheckboxes) {
  //   for (const dayCheckbox of dayCheckboxes) {
  //       await dayCheckbox.check();
  //       await expect(dayCheckbox).toBeChecked();
  //    }

   //  for (const dayCheckbox of dayCheckboxes.slice(0,-1)) {
   //        await dayCheckbox.uncheck();
   //        await expect(dayCheckbox).not.toBeChecked();
   //     }

  //   for (const dayCheckbox of dayCheckboxes) {

  //      if(await dayCheckbox.isChecked()) 
  //          {
  //          await dayCheckbox.uncheck();
  //          await expect(dayCheckbox).not.toBeChecked();
  //      } 
  //      else {

  //      await dayCheckbox.check();
  //      await expect(dayCheckbox).toBeChecked();
  //      }
  //   }
//
        const index = [1,3,5];
        for (const i of index) {

            await dayCheckboxes[i].check();
            await expect(dayCheckboxes[i]).toBeChecked();
        }








    await page.waitForTimeout(2000);
});
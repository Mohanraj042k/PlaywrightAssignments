import test, { expect } from "@playwright/test";

test('Alert Frame', async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // Set up dialog handler AFTER navigation but BEFORE any actions that trigger dialogs
    page.on('dialog', async (alertMessage) => {
        console.log("Message from Dialog Box : " + alertMessage.message());
        const type = alertMessage.type();
        console.log(`Type: ${type}`);
        
        if (type === 'confirm') {
            await alertMessage.accept();
        } else {
            await alertMessage.dismiss();
        }
    });

    // Switch to the iframe and click the button
    const frame = page.frameLocator("#iframeResult");
    await frame.locator("button:has-text('Try it')").click();

    await page.waitForTimeout(3000);

    const message = await frame.locator("#demo").innerText();
    const expectedValue = "You pressed OK!";
    expect(message).toEqual(expectedValue);
    console.log("Verification Successful!!");
});
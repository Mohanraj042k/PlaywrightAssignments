import test, { expect } from "@playwright/test";

test('Create a new account', async({page})=>{

    await page.goto("https://login.salesforce.com/")

    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByLabel('Password').fill('TestLeaf@2025')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(10000)
    
    const title = await page.title()
    const url = await page.url()

    expect.soft("Home | Salesforce").toEqual(title)
    expect.soft("https://testleaf.lightning.force.com/lightning/page/home").toEqual(url)

    console.log('Logged in successfully')

    await page.locator("div[class='slds-icon-waffle']").click()
    await page.getByText('View All').nth(2).click()
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.waitForTimeout(5000)
    await page.locator("(//mark[text()='Service'])[1]").click()
    await page.locator("a[title='Accounts']").click()
    await page.getByRole('button',{name:'New'}).click()
    await page.locator("input[name='Name']").fill('Dilip')
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(2000)
    const toastMessage = await page.locator("[class='toastMessage slds-text-heading--small forceActionsText']").innerText()
    //await expect(toastMessage).toBeVisible();
    //console.log(toastMessage)

    const expectedMessage = "Account \"Dilip\" was created."

    expect(expectedMessage).toEqual(toastMessage)

    console.log("Account Created")


})
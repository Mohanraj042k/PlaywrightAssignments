import test, { expect } from "@playwright/test";

test('Edit a lead', async({page})=>{

    
    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.getByRole('textbox',{name:'Username'}).fill('Demosalesmanager')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:'Login'}).click()
    console.log("Login initiated")
    await page.waitForTimeout(3000)
    console.log("Logged in Successfully")
    await page.locator("//div[@id='label']/a[contains(text(),'CRM/SFA')]").click()
    await page.waitForTimeout(3000)
    await page.locator("//div[@class='x-panel-header']/a[text()='Leads']").click()

    await page.locator("//div[@class='frameSectionBody']//li/a[text()='Find Leads']").click()
    await page.getByRole('textbox',{name:'First name:'}).fill("Mohan")
    await page.locator("//button[text()='Find Leads']").click()
    await page.locator("(//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']//a)[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[@class='subMenuButton' and text()='Edit']").click()
    const oldValue=await page.locator("#updateLeadForm_companyName").textContent()
    await page.locator("#updateLeadForm_companyName").clear()
    await page.locator("#updateLeadForm_companyName").fill("NewTestLeaf")
    await page.locator("#updateLeadForm_annualRevenue").clear()
    await page.locator("#updateLeadForm_annualRevenue").fill("900000")
    await page.locator("#updateLeadForm_departmentName").clear()
    await page.locator("#updateLeadForm_departmentName").fill("Automation Engineer")
    await page.locator("#updateLeadForm_description").fill("Values Edited")
    await page.getByRole('button',{name:'Update'}).click()
    await page.waitForTimeout(5000)
    const updatedValue = await page.locator("#viewLead_companyName_sp").textContent()
    console.log(updatedValue)

    expect(oldValue).not.toBe(updatedValue)
    console.log("Updated Properly")



})


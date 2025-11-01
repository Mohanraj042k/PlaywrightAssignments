import test, { chromium, expect } from '@playwright/test'


test('Create a lead',async({page})=>{
    //await page.goto('http://leaftaps.com/opentaps/control/main')

    //Launch browser

    // const browser = await chromium.launch({headless:false, channel: 'chrome'})
    // const context = await browser.newContext()
    // const page = await context.newPage()

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
    await page.locator("//div[@class='frameSectionBody']//li/a[text()='Create Lead']").click()
    const companyName = await page.locator("#createLeadForm_companyName").fill("TestLeaf")
    const firstName = await page.locator("#createLeadForm_firstName").fill("Mohan")
    const lastName = await page.locator("#createLeadForm_lastName").fill("Raj")
    await page.locator("[name='personalTitle']").fill("Mr.")
    await page.locator("#createLeadForm_generalProfTitle").fill("Trainee")
    await page.locator("#createLeadForm_annualRevenue").fill("500000")
    await page.locator("#createLeadForm_departmentName").fill("Automation")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")
    await page.getByRole('button',{name:'Create Lead'}).click()
    await page.waitForTimeout(5000)
    console.log(await page.title())


    //const viewCompanyName=await page.locator("#viewLead_companyName_sp").textContent()
    const viewFirstName =await page.locator("#viewLead_firstName_sp").textContent()
    const viewLastName =await page.locator("#viewLead_lastName_sp").textContent()
    const ViewStatus =await page.locator("#viewLead_statusId_sp").textContent()

    //soft assertion
    expect.soft("Mohan").toEqual(viewFirstName)
    console.log("firstName Matched")
    expect("Raj").toEqual(viewLastName)
    console.log("lastName Matched")
    // const Status = "Assigned"
    expect.soft("Assigned").toEqual(ViewStatus)
    console.log("Status Matched")





    //console.log(viewCompanyName)
    // console.log(viewFirstName)
    // console.log(viewLastName)
    // console.log(ViewStatus)








})
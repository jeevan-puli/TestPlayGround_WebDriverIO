const HomePage = require('../pageobjects/homePage')
const sampeAppPage = require('../pageobjects/sampleAppPage')
const expectchai = require('chai').expect

describe('TestPlayground Application Home Page Test', async() => {

    it('C1234 - User is able to access UITestingPlayground Home Page', async() => {
        await browser.url("")
        await console.log(await browser.getTitle())
        await expect (browser).toHaveTitleContaining("UI Test")
        
    })

    it('C1235 - User is able to access Sample App Page by clicking on sample app link in home page', async() => {
        await HomePage.ClickSampleApp()
        await sampeAppPage.userNameElemXpt.waitForExist()
        await expect(browser).toHaveTitle("Sample App")
    })

    it('C12346 - User is able to access Resources Page by clicking on Resources link in home page headder', async() => {
        await HomePage.ClickResource()
        await expect(browser).toHaveTitle("Resources")
    })
})
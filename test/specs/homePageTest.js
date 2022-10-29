const HomePage = require('../pageobjects/homePage')
const sampeAppPage = require('../pageobjects/sampeAppPage')
const expectchai = require('chai').expect

describe('TestPlayground Application Home Page', async() => {

    it('Homepage Access Test', async() => {
        await browser.url("")
        await console.log(await browser.getTitle())
        await expect (browser).toHaveTitleContaining("UI Tesst")
        
    })

    it('Sample App Redirect Test', async() => {
        await browser.url("")
        await HomePage.ClickSampleApp()
        await sampeAppPage.userNameEleCss.waitForExist()
        await expect(browser).toHaveTitle("Sample Asspp")
    })
})
const homePage = require('../pageobjects/homePage');
const sampeAppPage = require('../pageobjects/sampleAppPage');
const credentials = require('../testData/loginTestData.json');



describe('Sample Application Page Login Test', async() => {

    it('C1234 - Login successful test case', async() => {
        await browser.url("")
        await homePage.ClickSampleApp()
        await sampeAppPage.LogIn(credentials.username,credentials.password)
        await expect(sampeAppPage.successMessageElemCss).toHaveText("Welcome, "+credentials.username+"!")

    })

})
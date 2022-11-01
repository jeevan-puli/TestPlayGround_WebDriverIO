const homePage = require('../pageobjects/homePage');
const progressBarPage = require('../pageobjects/progressBarPage')

describe('Progressbar Test', async() => {
    it('C1239 - User can click on start and stop buttons', async() => {
        await browser.url("/")
        await homePage.ClickProgressBar()
        await progressBarPage.ClickStartButton()
        await browser.waitUntil( async() => (await progressBarPage.progressBarElemCss.getText()) >= '75%', {timeout: 30000}) 
        await progressBarPage.ClickStopButton()
        const progressbarNumber = await progressBarPage.progressBarElemCss.getText()
        console.log('Number on the progressbar after stop is:'+progressbarNumber)
    })
})
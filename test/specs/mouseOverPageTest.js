const homePage = require('../pageobjects/homePage');
const mouseOverPage = require('../pageobjects/mouseOverPage');

describe('Mouse Over Page Test', async() => {

    it('C1238 - Verify clicking on click me increasing the link clicked count', async() => {
        await browser.url("")
        await homePage.ClickMouseOver()
        await mouseOverPage.clickMeLinkElemXpt.moveTo()
        await browser.pause(3000)
        const count = 2
        for ( let i=1; i<=count; i++ ) {
            await mouseOverPage.ClickClickMe()
        }
        await browser.pause(3000)
        const displayedCount = await mouseOverPage.DisplayedClickCount()
        await expect(count).toEqual(displayedCount)
    })
})
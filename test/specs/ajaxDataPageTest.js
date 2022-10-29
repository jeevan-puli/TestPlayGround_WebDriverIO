const homePage = require('../pageobjects/homePage');
const ajaxDataPage = require('../pageobjects/aJaxDataPage');

describe('AJAX Data Page Test', async() => {

    it('C1237 - Element Visible after processing AJAX request to web server', async() => {
        await browser.url("")
        await homePage.ClickAjaxData()
        await ajaxDataPage.ClickTriggerRequestButton()
        await ajaxDataPage.loadSuccessTexElemCss.waitForDisplayed({ timeout: 17000 })
        await expect(ajaxDataPage.loadSuccessTexElemCss).toHaveTextContaining("Data loaded with AJAX get request")

    })
})
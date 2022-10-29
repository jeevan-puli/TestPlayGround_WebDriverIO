const expectchai = require('chai').expect

describe('TestPlayground Application Home Page', async () => {

    it('Homepage Access Test', async () => {
        await browser.url("")
        await expect (browser).toHaveTitleContaining("UI Test")
    })
})
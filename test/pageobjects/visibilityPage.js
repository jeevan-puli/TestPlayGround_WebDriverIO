class VisibilityPage {

    get clickMeLinkElemXpt() { return $("//a[text()='Click me']")}

    get clickCountElemCss() { return $("#clickCount")}

    async ClickClickMe(){
        await this.clickMeLinkElemXpt.click()
    }

    async DisplayedClickCount(){
        
        const displayedCountText = await this.clickCountElemCss.getText()
        const displayedCountNumber = Number(displayedCountText)
        return displayedCountNumber

    }

}
module.exports = new VisibilityPage()
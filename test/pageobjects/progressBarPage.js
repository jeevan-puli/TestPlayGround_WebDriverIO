class ProgressBarPage {

    get startButtonElemCss() { return $("#startButton")}

    get stopButtonElemCss() { return $("#stopButton")}

    get progressBarElemCss() {return $('#progressBar')}

    async ClickStartButton(){
        await this.startButtonElemCss.click()
    }

    async ClickStopButton(){
        await this.stopButtonElemCss.click()
    }


}
module.exports = new ProgressBarPage()
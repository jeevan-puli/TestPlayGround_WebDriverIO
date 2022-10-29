class AjaxDataPage {

    get ajaxRequestButnElemCss() { return $("#ajaxButton")}

    get loadSuccessTexElemCss() { return $(".bg-success")}

    async ClickTriggerRequestButton(){
        await this.ajaxRequestButnElemCss.click()
    }

}
module.exports = new AjaxDataPage() 
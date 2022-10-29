class Homepage{

    get dynamicIdEleCss() { return $("a[href='/dynamicid']")}

    get classAttributeEleCss() {return $("a[href='/classattr']")}

    get hiddenLayersEleXpath() {return $("//a[normalize-space()='Hidden Layers']")}

    get loadDelayEleCss() {return $("a[href='/loaddelay']")}

    get ajaxDateEleCss() {return $("a[href='/ajax']")}

    get clientSideDelayEleCss() {return $("a[href='/clientdelay']")}

    get clickEleCss() {return $("a[href='/click']")}

    get textInputEleCss() {return $("a[href='/textinput']")}

    get scrollBarEleCss() {return $("a[href='/scrollbars']")}

    get dynamicTableEleCss() {return $("a[href='/dynamictable']")}

    get verifyTextEleCss() {return $("a[href='/verifytext']")}

    get progressBarEleCss() {return $("a[href='/progressbar']")}

    get visibilityEleCss() {return $("a[href='/visibility']")}

    get sampleAppEleCss() {return $("a[href='/sampleapp']")}

    get mouseOverEleCss() {return $("a[href='/mouseover']")}

    get nonBreakingSpaceEleCss() {return $("a[href='/nbsp']")}

    get overlappedElementEleCss() {return $("a[href='/overlapped']")}

    get shadowDomEleCss() {return $("a[href='/shadowdom']")}

    async ClickSampleApp(){
        await this.sampleAppEleCss.click()
    }

    async ClickClientSideDelay(){
        await this.clientSideDelayEleCss.click()
    }


}

module.exports = new Homepage()
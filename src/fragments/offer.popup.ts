const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.openLoanEnterData`,
    },
    popupVerifyData: {
      css: `.openLoanVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    continueOrder: {
      css: `.actionOpenLoan`,
    },
    date: {
      css: `.date`,
    },
    consumerCreditLink: {
      css: `a.actionDownload`,
    },
    confirmRead: {
      css: `.renderedCheckbox label`,
    },
  },
  isVisible() {
    I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData))
  },
  clickOnClose() {
    I.click(this.fields.close)
  },
  clickOnContinue() {
    I.click(this.fields.continue)
  },
  clickOnContinueOrder() {
    I.click(this.fields.continueOrder)
  },
  enterDate(date: string) {
    I.fillField(locate(this.fields.popupEnterData).find(this.fields.date), date)
    I.pressKey('Enter')
  },
  downloadCreditContract() {
    I.click(locate(this.fields.popupVerifyData).find(this.fields.consumerCreditLink))
    I.amInPath('output/downloads')
    I.waitForFile('014-RO-82-149292058.pdf', 30)
  },
  confirmRead() {
    I.click(locate(this.fields.popupVerifyData).find(this.fields.confirmRead))
  },
}

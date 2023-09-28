const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.loanRestructuringEnterData`,
    },
    popupVerifyData: {
      css: `.loanRestructuringVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    prolongationLoanTerm: {
      css: `.prolongation .renderedCheckboxField label`,
    },
    authenticity: {
      css: `.personalInfoValid .renderedCheckboxField label`,
    },
    terms: {
      css: `.agreement .agreementCheckboxField label`,
    },
  },
  isVisible() {
    I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 60)
  },
  isInvisible() {
    I.waitForInvisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 10)
  },
  clickOnCloseBtn() {
    I.click(this.fields.close)
  },
  clickOnContinueBtn() {
    I.click(this.fields.continue)
  },
  clickOnProlongingLoanTermCheckbox() {
    I.click(this.fields.prolongationLoanTerm)
  },
  clickOnConfirmAuthenticity() {
    I.click(this.fields.authenticity)
  },
  clickOnConfirmTerm() {
    I.click(this.fields.terms)
  },
}

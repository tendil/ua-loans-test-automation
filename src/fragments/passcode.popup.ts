const { I } = inject()

export = {
  fields: {
    popup: {
      css: `.loanRestructuringEnterData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    password: {
      css: `.passcodeField input`,
    },
  },
  isVisible() {
    I.waitForVisible(this.fields.popup, 60)
  },
  isInvisible() {
    I.waitForInvisible(this.fields.popup, 10)
  },
  clickOnCloseBtn() {
    I.click(this.fields.close)
  },
  clickOnContinueBtn() {
    I.click(this.fields.continue)
  },
  enterPassword(password: string) {
    I.fillField(this.fields.password, password)
  },
}

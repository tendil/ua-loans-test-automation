const { I } = inject()

export = {
  fields: {
    popupEnterData: {
      css: `.transferEnterData`,
    },
    popupVerifyData: {
      css: `.productToProductTransferVerifyData`,
    },
    close: {
      css: `a.actionClose`,
    },
    continue: {
      css: `button.next`,
    },
    card: {
      css: `.comboboxField .ui-combobox`,
    },
    cards: {
      css: `.ui-combobox .ui-menu-item`,
    },
    sum: {
      css: `.amountInputField .sum`,
    },
  },
  isVisible() {
    I.waitForVisible(locate(this.fields.popupEnterData).or(this.fields.popupVerifyData), 60)
  },
  selectCreditCard(iban: string) {
    I.click(locate(this.fields.popupEnterData).find(this.fields.card))
    I.click(locate(this.fields.popupEnterData).find(this.fields.cards).withText(iban))
  },
  enterSum(sum: string) {
    I.fillField(locate(this.fields.popupEnterData).find(this.fields.sum), sum)
    I.pressKey('Enter')
  },
  clickOnContinueBtn() {
    I.click(this.fields.continue)
  },
}

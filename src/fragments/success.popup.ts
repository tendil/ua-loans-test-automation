const { I } = inject()

export = {
  fields: {
    popup: {
      css: `.modal-window-content.operationExecutionPanel.result`,
    },
    close: {
      css: `.close`,
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
}

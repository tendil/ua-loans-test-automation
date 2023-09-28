const { I } = inject()

export = {
  fields: {
    username: {
      xpath: `//label[normalize-space(text())="Логін"]/../..//input`,
    },
    password: {
      xpath: `//label[normalize-space(text())="Пароль"]/../..//input`,
    },
    remember: {
      xpath: `//label[normalize-space(text())="Запам'ятати логін"]`,
    },
    submit: {
      xpath: `//button[normalize-space(text())="Вхід"]`,
    },
  },
  open() {
    I.amOnPage('home')
  },
  isOpen() {
    I.waitInUrl('home', 10)
    I.waitForVisible('body')
  },
  login(username = '', password = '', remember = false) {
    I.clearField(this.fields.username)
    I.fillField(this.fields.username, username)
    I.clearField(this.fields.password)
    I.fillField(this.fields.password, password)

    if (remember) I.click(this.fields.remember)

    I.click(this.fields.submit)
  },
}

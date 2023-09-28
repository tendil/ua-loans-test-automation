const { loginPage } = inject()

Given('go to the login page', async () => {
  loginPage.open()
})

Given('I am on login page', async () => {
  loginPage.isOpen()
})

When(
  'on login page, log in as a user with username: {string}, password: {string}, remember: {string}',
  async (username: string, password: string, remember: boolean) => {
    loginPage.login(username, password, remember)
  },
)

Given('on login page, log in as a user', async () => {
  loginPage.login(process.env.USER_USERNAME, process.env.USER_PASSWORD)
})

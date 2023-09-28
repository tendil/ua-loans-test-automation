const { customerAuth, I } = inject()

Given('set url {string}', async (url: string) => {
  I.amOnPage(url)
})

When('send POST request to log in as customer with email: {string}', async (email: string) => {
  await customerAuth.sendPostRequestLogCustomer(email)
})

Then('in response body has otp reference', async () => {
  await customerAuth.checkResponseLogCustomer()
})

Then('in response body should contain json', async () => {
  await customerAuth.checkErrorMessageInvalidEmail()
})
When('send post request to verify otp code', async () => {
  await customerAuth.sendPostRequestVerifyOtp()
})

Then('in response body get access token, refresh token and scan_token', async () => {
  await customerAuth.checkToken()
})

Then('in response body should contain error json', async () => {
  await customerAuth.checkErrorResponseVerifyOtpCode()
})

When('send post request to verify otp code with invalid credentials', async () => {
  await customerAuth.sendPostRequestVerifyOtpInvalidCredential()
})

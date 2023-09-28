const { I } = inject()

export = {
  async sendPostRequestLogCustomer(value: string) {
    await I.sendPostRequest('/auth/customer/login', { email: value })
  },

  async checkResponseLogCustomer() {
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['otpReference'])
    I.seeResponseValidByCallback(({ data, expect }) => {
      expect(data.otpReference).to.be.a('string')
    })
  },

  async checkErrorMessageInvalidEmail() {
    I.seeResponseValidByCallback(({ data, expect, status }) => {
      expect(data.error).equal('Bad Request')
      expect(status).equal(400)
      expect(data.message.email[0]).equal('email must be an email')
    })
  },

  async sendPostRequestVerifyOtp() {
    await I.seeResponseValidByCallback(async ({ data }) => {
      await I.sendPostRequest('/auth/customer/verify', { otpReference: data.otpReference, otpCode: '1111' })
    })
  },

  async checkToken() {
    await I.seeResponseValidByCallback(({ data, expect }) => {
      expect(data.access_token).to.be.a('string')
      expect(data.refresh_token).to.be.a('string')
      expect(data.scan_token).to.be.a('string')
    })
  },

  async checkErrorResponseVerifyOtpCode() {
    I.seeResponseValidByCallback(({ data, expect, status }) => {
      expect(status).equal(400)
      expect(data.error).equal('Bad Request')
      expect(data.message.otpCode[0]).equal('otpCode must be a number string')
      expect(data.message.otpReference[0]).equal('otpReference must be a UUID')
    })
  },

  async sendPostRequestVerifyOtpInvalidCredential() {
    await I.seeResponseValidByCallback(async ({ data }) => {
      await I.sendPostRequest('/auth/customer/verify', { otpReference: 'string', otpCode: 'string' })
    })
  },
}

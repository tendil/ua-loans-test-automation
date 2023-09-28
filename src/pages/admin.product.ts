const { I } = inject()

export = {
  async sendPostRequestCreateCompany(providerShopify: string, nameCompany: string, logoCompany: string) {
    I.seeResponseValidByCallback(async ({ data }) => {
      await I.sendPostRequest(
        '/companies/admin',
        {
          provider: providerShopify,
          name: nameCompany,
          logo: logoCompany,
        },
        {
          Authorization: data.access_token,
        },
      )
    })
  },

  async checkResponseCreateCompany() {
    I.seeResponseValidByCallback(async ({ data, status, expect }) => {
      expect(data.id).to.be.a('string')
      expect(status).equal(201)
      expect(data.provider).to.be.a('string')
      expect(data.name).to.be.a('string')
      expect(data.created_at).to.be.a('string')
      expect(data.updated_at).equal(null)
    })
  },

  async sendPostRequestCreateCompanyWithoutHeader(providerShopify: string, nameCompany: string, logoCompany: string) {
    await I.sendPostRequest('/companies/admin', {
      provider: providerShopify,
      name: nameCompany,
      logo: logoCompany,
    })
    await I.seeResponseCodeIsSuccessful()
  },
}

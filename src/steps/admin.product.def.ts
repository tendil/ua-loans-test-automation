const { adminProduct } = inject()

When(
  'send POST request to create company with: {string}, {string}, {string}',
  async (provider: string, name: string, logo: string) => {
    await adminProduct.sendPostRequestCreateCompany(provider, name, logo)
  },
)

Then('get response body in json format', async () => {
  await adminProduct.checkResponseCreateCompany()
})

When(
  'send a POST request without headers to create a company with the following details:',
  async (provider: string, name: string, logo: string) => {
    await adminProduct.sendPostRequestCreateCompanyWithoutHeader(provider, name, logo)
  },
)

/* eslint @typescript-eslint/no-unsafe-assignment: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

require('dotenv').config()
require('ts-node/register')

const { setCommonPlugins, setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

exports.config = {
  name: 'ua-loans-pi-lending-test-automation',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://api.vera.artkai.dev/api',
      show: false,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      waitForAction: 1000,
    },
    REST: {
      endpoint: 'https://api.vera.artkai.dev/api',
      prettyPrintJson: true,
    },
    JSONResponse: {},
    FileSystem: {},
  },
  gherkin: {
    features: './src/features/api/admin.auth.feature',
    steps: ['./src/steps/login.def.ts', './src/steps/admin.def.ts', './src/steps/admin.product.def.ts'],
  },
  // fullPromiseBased: true,
  include: {
    I: './steps.common.ts',
    loginPage: './src/pages/login.page.ts',
    customerAuth: './src/pages/admin.auth.ts',
    adminProduct: './src/pages/admin.product.ts',
  },
  plugins: {},
  bootstrap: false,
  // require modules
  require: ['ts-node/register'],
}

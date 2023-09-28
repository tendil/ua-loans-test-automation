/// <reference types='codeceptjs' />
type stepsCommon = typeof import('./steps.common.ts')
type loginPage = typeof import('./src/pages/login.page.ts')
type CustomerAuth = typeof import('./src/pages/admin.auth.ts')
type adminProduct = typeof import('./src/pages/admin.product.ts')
type loanPayPopup = typeof import('./src/fragments/loan.pay.popup.ts')
type longTermRepaymentPopup = typeof import('./src/fragments/long.term.repayment.popup.ts')
type offerPopup = typeof import('./src/fragments/offer.popup.ts')
type restructuringPopup = typeof import('./src/fragments/restructuring.popup.ts')
type passcodePopup = typeof import('./src/fragments/passcode.popup.ts')
type SuccessPopup = typeof import('./src/fragments/success.popup.ts')

declare namespace CodeceptJS {
  interface SupportObject {
    I: I
    loginPage: loginPage
    customerAuth: CustomerAuth
    adminProduct: adminProduct
    loanPayPopup: loanPayPopup
    longTermRepaymentPopup: longTermRepaymentPopup
    offerPopup: offerPopup
    restructuringPopup: restructuringPopup
    passcodePopup: passcodePopup
    successPopup: SuccessPopup
  }

  interface Methods extends Playwright, FileSystem, REST, JSONResponse {}

  interface I extends ReturnType<stepsCommon>, WithTranslation<Methods> {}

  namespace Translation {
    interface Actions {}
  }
}

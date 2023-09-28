Feature: Long-term repayment functionality

  Background:
    * go to the login page
    * on login page, log in as a user

  @smoke
  Scenario: make long-term repayment
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22030807606'
    * on loans page, click on long-term repayment button
    * in long-term repayment popup, select credit card which iban contains '262004803455'
    * in long-term repayment popup, enter sum '10'
    * in long-term repayment popup, click on continue button
    * in long-term repayment popup, click on continue button
    * success popup is visible

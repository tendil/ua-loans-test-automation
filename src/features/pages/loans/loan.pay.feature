Feature: Loan pay functionality

  Background:
    * go to the login page
    * on login page, log in as a user

  @smoke
  Scenario: make loan pay
      * I am on dashboard page
      * on dashboard page, in left menu, click on loans
      * I am on loans page
      * on loans page, select credit card which iban contains '22030807606'
      * on loans page, click on loan pay button
      * in loan pay popup, enter sum '10'
      * in loan pay popup, select credit card which iban contains '262004803455'
      * in loan pay popup, click on continue button
      * in loan pay popup, click on continue button
      * success popup is visible

  Scenario: check first date transactions for period 30 days
      * I am on dashboard page
      * on dashboard page, in left menu, click on loans
      * I am on loans page
      * on loans page, select credit card which iban contains '22030807606'
      * on loans page, click on payment history button
      * on loans page, click on period field and choose: 'За 30 днів' period
      * on loans page, first transaction date is: '23.05.2023'

  Scenario: check date payment
      * I am on dashboard page
      * on dashboard page, in left menu, click on loans
      * I am on loans page
      * on loans page, select credit card which iban contains '22030807606'
      * on loans page, click on payment schedule button
      * on loans page, check payment schedule by position 1 with date: '23.06.2023', amountDue: '270,60', loanBalance: '9210,10'

  Scenario: check first date transactions for period 7 days
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22030807606'
    * on loans page, click on payment history button
    * on loans page, click on period field and choose: 'За 7 днів' period
    * on loans page, first transaction date is: '23.05.2023'

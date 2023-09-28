Feature: Restructuring functionality

  Background:
    * go to the login page
    * on login page, log in as a user

  Scenario: if bill can be restructuring we will show the button
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22033807573'
    * on loans page, restructuring button is visible

  Scenario: if bill can't be restructuring we will hide the button
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22030807606'
    * on loans page, restructuring button is invisible

  Scenario: first restructuring popup window can be closed
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22033807573'
    * on loans page, click on restructuring button
    * in restructuring popup, click on close button
    * on loans page, restructuring popup is invisible

  Scenario: make restructuring with prolonging loan term
    * I am on dashboard page
    * on dashboard page, in left menu, click on loans
    * I am on loans page
    * on loans page, select credit card which iban contains '22035807623'
    * on loans page, click on restructuring button
    * in restructuring popup, click on prolonging loan term checkbox
    * in restructuring popup, click on continue button
    * in restructuring popup, confirm authenticity
    * in restructuring popup, confirm terms of restructuring
    * in restructuring popup, click on continue button
    * in passcode popup, from sms enter password: '111111'
    * in passcode popup, click on continue button
    * success popup is visible

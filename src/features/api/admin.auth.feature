Feature: Admin Auth

  Scenario: Login customer
    Given set url 'https://api.vera.artkai.dev/api'
    When  send POST request to log in as customer with email: 'o.oleniuk@artk.ai'
    Then in response body has otp reference

  Scenario: Login as a customer with incorrect email
    Given set url 'https://api.vera.artkai.dev/api'
    When send POST request to log in as customer with email: 'o.oleniukartk.ai'
    Then in response body should contain json
    """
    {
      "error": "Bad Request",
      "message": {
        "email": [
          "email must be an email"
        ]
      },
      "statusCode": 400
    }
    """

  Scenario: Verify OTP code
    Given set url 'https://api.vera.artkai.dev/api'
    When send POST request to log in as customer with email: 'o.oleniuk@artk.ai'
    When send post request to verify otp code
    Then in response body get access token, refresh token and scan_token

  Scenario: Verify OTP code with invalid credentials
    Given set url 'https://api.vera.artkai.dev/api'
    When send POST request to log in as customer with email: 'o.oleniuk@artk.ai'
    When send post request to verify otp code with invalid credentials
    Then in response body should contain error json
    """
      {
        "error": "Bad Request",
        "message": {
            "otpCode": [
                  "otpCode must be a number string"
                   ],
            "otpReference": [
                   "otpReference must be a UUID"
                   ]
             },
         "statusCode": 400
      }
      """







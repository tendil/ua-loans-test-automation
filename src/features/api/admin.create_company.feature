Feature: Company Admin

  Background:
    Given set url 'https://api.vera.artkai.dev/api'
    When  send POST request to log in as customer with email: 'o.oleniuk@artk.ai'
    When send post request to verify otp code
    Then in response body get access token, refresh token and scan_token

    Scenario: Create company
      When send POST request to create company with: 'shopify', 'Louis Vuitton', 'Louis Vuitton Logo'
      Then get response body in json format



    Scenario:Unable create company without token
      When send a POST request without headers to create a company with the following details:
        | provider | name          | logo               |
        | shopify  | Louis Vuitton | Louis Vuitton Logo |


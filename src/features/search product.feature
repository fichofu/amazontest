Feature: Search and check balance

  Background:
    Given "https://amazon.co.uk" is open

  Scenario Outline: Sign into Amazon.co.uk
    When I click Sign-in
    And enter valid "<username> as username"
    And I Continue
    And enter valid "<password> as password"
    And I signed in
    Then I am logged in
    Examples:
      | username             | password    |
      | fegorichofu@outlook.com | LongBeach2@ |

  Scenario Outline: Search for product add to basket
    Given when I search for "<query>"
    When the search results are displayed
    Then the search results has the "<query>" in it
    Examples:
      | query         |
      | iceworks 5000 |

  Scenario Outline: Check basket total
    Given when I search for "<query>"
    And the search results are displayed
    Then the search results has the "<query>" in it
    Given I add "<query>" to my basket
    When I check my basket total
    Then it should match the price of the item added into basket
    Examples:
      | query         |
      | iceworks 5000 |

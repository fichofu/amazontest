## Amazon Automation

Build a test framework from scratch that will run the feature file scenarios composed below. Your delivery will be sent back using GitHub so we can clone it with ease.
The tech stack of your delivery will be built against a JavaScript framework that utilises Protractor, Cucumberjs/Mocha and Chai.

As A user I want to log on to Amazon, search out “Iceworks 5000”, add to basket and verify the price of the item matches the checkout total.


## Feature file
This feature is modified with some parameterised values and augmented for a thorough process flow
```Background:
    Given Amazon.co.uk is open

  Scenario: Sign into Amazon.co.uk
    When I click Sign-in
    And enter valid username
    And I Continue
    And enter valid password
    And I signed in
    Then I am logged in

  Scenario: Search for product add to basket
    Given when I search for "iceworks 5000"
    When the search results are displayed
    Then the search results has the "iceworks 5000" in it

  Scenario: Check basket total
    Given I add "iceworks 5000" to my basket
    When I check my basket total
    Then it should match the price of the item added into basket
```

## How it works

A user with a valid credentials on ['Amazon']('http://amazon.co.uk') can run this automation 

### Steps to run

To sucessfully run the test, change the email address and the password specified in the [feature file](features/search%20product.feature) .



```npm run setup``` for the first time 

Then:

```npm run test``` to verify results


### Note

There might be some latency and test failures if the network is bad.

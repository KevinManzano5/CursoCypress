Feature: Add a product to the shopping cart
    Scenario: I add a product to the cart successfully
        Given I am on the Dafiti webpage
        When I am looking for a product
        Then I validate that the product is in the cart
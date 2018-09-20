Feature:
  As a user
  I want to be able to add items to cart

  Scenario: Search for items on ebay
    Given the user is on the home Page
    When the user searches for an item "Dishwasher" adds to the shopping cart
    And the user again searches for an item "Dryer" adds to the shopping cart    
    Then the shopping cart should have both the items present
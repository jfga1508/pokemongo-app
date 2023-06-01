Feature: Get pokemons by a name

    Scenario: Verify call API all pokemons by name
        Given I define the url to call the API by name contain Cha
        When I call the API and save the the results
        Then I should grant the number of pokemons that contain Cha on the name
Feature: Get all pokemons

    Scenario: Verify call API all pokemons
        Given Define for the url to call the API of all pokemons
        When I call the API and save the the results
        Then I should grant the number of pokemons
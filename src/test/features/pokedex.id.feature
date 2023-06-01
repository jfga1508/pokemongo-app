Feature: Get details pokemons by Id

    Scenario: Verify call API get details pokemon by id
        Given I defeine the url to call the API by id of the pokemon
        When I call the API and save the detail result
        Then I should grant the numbdetailer of the pokmeon its correct
Feature: Get pokemons by a type

    Scenario: Verify call API all pokemons by main type
        Given I defeine the url to call the API by the main type be equal grass
        When I call the API and save the the results
        Then I should grant the number of pokemons that main type is grass
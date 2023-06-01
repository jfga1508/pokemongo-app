Feature: Get all pokemons

    Scenario: Database has pokemons 
        Given the database is running
        When the user loads the page
        Then the DB returns the data of all pokemon
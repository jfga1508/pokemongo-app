/* eslint-disable no-undef */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { getPokemons } from '../../hooks/usePokemonData';
import {
    allPokemons,
    namePokemons,
    typePokemons,
    pokemon,
} from '../Mocks/pokemons';

const featureAll = loadFeature('./src/test/features/pokedex.all.feature');
const featureName = loadFeature('./src/test/features/pokedex.name.feature');
const featureType = loadFeature('./src/test/features/pokedex.type.feature');
const featureId = loadFeature('./src/test/features/pokedex.id.feature');

const urlHandler = (url) => {
    switch (url) {
        case 'http://localhost:3000/pokemons': {
            return Promise.resolve(allPokemons);
        }
        case 'http://localhost:3000/pokemons/?name_like=Cha': {
            return Promise.resolve(namePokemons);
        }
        case 'http://localhost:3000/pokemons/?mainType=grass': {
            return Promise.resolve(typePokemons);
        }
        case 'http://localhost:3000/pokemons/1': {
            return Promise.resolve(pokemon);
        }
        default: {
            throw new Error('Unhandled request');
        }
    }
};

jest.mock('../../hooks/usePokemonData', () => ({
    getPokemons: (url) => urlHandler(url),
}));

defineFeature(featureAll, (test) => {
    test('Verify call API all pokemons', ({ given, when, then }) => {
        let urlApi = '';
        let pokemonsApi = [];
        given('Define for the url to call the API of all pokemons', () => {
            urlApi = 'http://localhost:3000/pokemons';
        });

        when('I call the API and save the the results', async () => {
            pokemonsApi = await getPokemons(urlApi);
        });

        then('I should grant the number of pokemons', () => {
            expect(pokemonsApi.length).toBe(allPokemons.length);
        });
    });
});

defineFeature(featureName, (test) => {
    test('Verify call API all pokemons by name', ({ given, when, then }) => {
        let urlApi = '';
        let pokemons = [];
        given('I define the url to call the API by name contain Cha', () => {
            urlApi = 'http://localhost:3000/pokemons/?name_like=Cha';
        });

        when('I call the API and save the the results', async () => {
            pokemons = await getPokemons(urlApi);
        });

        then(
            'I should grant the number of pokemons that contain Cha on the name',
            () => {
                expect(pokemons.length).toBe(namePokemons.length);
            }
        );
    });
});

defineFeature(featureType, (test) => {
    test('Verify call API all pokemons by main type', ({
        given,
        when,
        then,
    }) => {
        let urlApi = '';
        let pokemons = [];
        given(
            'I defeine the url to call the API by the main type be equal grass',
            () => {
                urlApi = 'http://localhost:3000/pokemons/?mainType=grass';
            }
        );

        when('I call the API and save the the results', async () => {
            pokemons = await getPokemons(urlApi);
        });

        then(
            'I should grant the number of pokemons that main type is grass',
            () => {
                expect(pokemons.length).toBe(typePokemons.length);
            }
        );
    });
});

defineFeature(featureId, (test) => {
    test('Verify call API get details pokemon by id', ({
        given,
        when,
        then,
    }) => {
        let urlApi = '';
        let pokemonApi = {};
        given('I defeine the url to call the API by id of the pokemon', () => {
            urlApi = 'http://localhost:3000/pokemons/1';
        });

        when('I call the API and save the detail result', async () => {
            pokemonApi = await getPokemons(urlApi);
        });

        then(
            'I should grant the numbdetailer of the pokmeon its correct',
            () => {
                expect(pokemonApi).toBe(pokemon);
            }
        );
    });
});

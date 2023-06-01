import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'https://pokemongo-api.azurewebsites.net/api';

/**
 * Function to create a pokemon making a call to the API
 * @param {{ id: any;
 *           mainType: any;
 *           image: any;
 *           name: any;
 *           weight: any;
 *           height: any;
 *           type: any;
 *           maxCp: number;
 *           attack: number;
 *           defense: number;
 *           stamina: number;
 *           hp: number;}} postData Pokemon data
 */
export const createPokemon = async (postData) => {
    let data = {};
    let pokemon = [postData];

    await axios
        .post(baseURL + '/pokemon', pokemon)
        .then((response) => {
            data = {
                message: postData.name + ' has been added to the pokedex.',
            };
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            data = {
                message: postData.name + ' could not be added to the pokedex.',
            };
        });

    return data;
};

/**
 * Function to edit a pokemon making a call to the API
 * @param {{ id: any;
 *           mainType: any;
 *           image: any;
 *           name: any;
 *           weight: any;
 *           height: any;
 *           type: any;
 *           maxCp: number;
 *           attack: number;
 *           defense: number;
 *           stamina: number;
 *           hp: number;}} postData Pokemon data
 */
export const modifyPokemon = async (postData) => {
    let data = {};

    await axios
        .post(baseURL + '/pokemon/', postData)
        .then((response) => {
            data = {
                message: postData.name + ' has been edited on the pokedex.',
            };
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            data = {
                message: postData.name + ' could not be edited on the pokedex.',
            };
        });

    return data;
};

/**
 * Function to delete a pokemon making a call to the API
 * @param {id} id Pokemon ID
 */
export const deletePokemon = async (id) => {
    let data = {};

    await axios
        .delete(baseURL + '/pokemon/' + id)
        .then((response) => {
            data = {
                message: 'This Pokemon has been deleted from the pokedex.',
            };
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            data = {
                message: ' This Pokemon could not be deleted from the pokedex.',
            };
        });

    return data;
};

/**
 * Function to call pokemons making a call to the API
 * @param search keyword for search pokemons
 */
export const usePokemons = (search = '') => {
    const [state, setState] = useState({
        data: {},
    });

    useEffect(() => {
        getPokemons(search).then((data) =>
            setState({
                data: data,
            })
        );
    }, []);

    return state;
};
/**
 * Function to get pokemons calling the API
 * @param search keyword for search pokemons
 */
export const getPokemons = async (search) => {
    let data = {};
    let url = search ? `${baseURL}/pokemon/${search}` : baseURL + '/pokemons';

    await axios.get(url).then((response) => {
        data = response.data;
    });

    return { data: data };
};

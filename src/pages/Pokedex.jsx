import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AlertCreate from '../components/AlertCreate';
import CardPokemon from '../components/CardPokemon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalPokemonAdd from '../components/ModalPokemonAdd';
import { usePokemons } from '../hooks/usePokemonData';

/**
 * Pokedex Page
 */
const Pokedex = () => {
    const params = useParams();
    let [dialog, setDialog] = useState({ active: false, message: '' });
    let { data: pokemons } = usePokemons(params.key);
    const [addPokemonModal, setAddPokemonModal] = useState(false);
    const [reload, setReload] = useState(false);
    const [pokemonsData, setPokemonsData] = useState({});
    const [pokemonEditStats, setPokemonEditStats] = useState({});

    /** Close alert dialog */
    function handleClose() {
        setDialog({
            active: false,
            message: '',
        });
    }

    /** Open alert dialog
     * @param text text "Alert dialog"
     */
    function handleAdd(text) {
        setDialog({
            active: true,
            message: text,
        });
    }

    /** Quick fix: Reload page and set reload state back to false after. */
    useEffect(() => {
        setReload(false);
    }, [reload]);

    /** Set the pokemons data after its been loaded/changed */
    useEffect(() => {
        pokemons.data?.sort(function (a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
        });
        setPokemonsData(pokemons);
    }, [pokemons]);

    /** Open pokemon add form */
    const handleAddPokemon = () => {
        setPokemonEditStats({});
        setAddPokemonModal(true);
        setReload(true);
    };

    /** Open pokemon edit form */
    const handleEditPokemon = (data) => {
        setPokemonEditStats({
            data,
        });
        setAddPokemonModal(!addPokemonModal);
        setReload(true);
    };

    /** Close pokemon add/edit form */
    const handleClosePokemon = () => {
        setAddPokemonModal(false);
    };

    /** Delete pokemon */
    const deletePokemon = (id) => {
        pokemons.data = pokemons.data?.filter((obj) => obj.id !== id);
        pokemons.data?.sort(function (a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
        });
        setPokemonsData(pokemons);
        setReload(true);
    };

    /** Add pokemon to the roster (not to the db, this is already done in the ModalPokemonAdd) */
    const addPokemon = (data) => {
        var newKey = Object.keys(pokemons.data).length;
        var foundIndex = pokemons.data.findIndex((x) => x.id === data.id);

        if (foundIndex >= 0) {
            // Update pokemon
            pokemons.data[foundIndex] = data;
        } else {
            // Add pokemon
            pokemons.data[newKey] = data;
        }

        pokemons.data?.sort(function (a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
        });

        setPokemonsData(pokemons);
        setReload(true);
    };

    return (
        <>
            <Helmet>
                <title>Pokemon GO - Pokedex</title>
                <meta
                    name='description'
                    content='Pokémon GO Pokedex, list all the pokemons available.'
                />
                <meta property='og:title' content='Pokémon GO - Pokedex' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Pokémon GO Pokedex, list all the pokemons available.'
                />
                <meta property='og:url' content='URL-TO-SITE' />
                <meta
                    property='og:image'
                    content='URL-TO-PAGE-PREVIEW-IMAGE-OR-POKEMON'
                />
                <meta name='twitter:title' content='Pokémon GO - Pokedex' />
                <meta
                    name='twitter:description'
                    content='Pokémon GO Pokedex, list all the pokemons available.'
                />
                <meta
                    name='twitter:image'
                    content='URL-TO-PAGE-PREVIEW-IMAGE-OR-POKEMON'
                />
                <meta name='twitter:card' content='summary_large_image' />
            </Helmet>
            <Header />
            {dialog.active && (
                <AlertCreate
                    onHandleClose={handleClose}
                    message={dialog.message}
                />
            )}
            <main className='pokedex'>
                <h1 className='heading-1 pokedex__title'>Pokedex</h1>
                <section className='pokedex-container' id='list-pokemon'>
                    {pokemonsData.data?.map((data, index) => (
                        <CardPokemon
                            key={index}
                            id={data.id}
                            hp={data.hp}
                            maxCp={data.maxCp}
                            attack={data.attack}
                            defense={data.defense}
                            stamina={data.stamina}
                            mainType={data.mainType}
                            url={data.image}
                            name={data.name}
                            weight={data.weight}
                            height={data.height}
                            type={data.type}
                            pokemons={(id) => deletePokemon(id)}
                            editPokemon={(data) => handleEditPokemon(data)}
                        />
                    ))}
                </section>
                <button
                    className='btn btn--circular btn-add'
                    id='btn-modal-pokemon-add'
                    aria-label='add-pokemon'
                    onClick={handleAddPokemon}
                >
                    <svg className='btn-add__icon' aria-hidden='true'>
                        <use xlinkHref='/assets/images/sprite.svg#icon-plus'></use>
                    </svg>
                </button>
            </main>

            {addPokemonModal && (
                <ModalPokemonAdd
                    onAlertCreate={(text) => handleAdd(text)}
                    onHandleClosePokemon={handleClosePokemon}
                    addPokemon={addPokemonModal}
                    pokemons={(data) => addPokemon(data)}
                    editPokemon={pokemonEditStats}
                />
            )}
            <Footer />
        </>
    );
};

export default Pokedex;

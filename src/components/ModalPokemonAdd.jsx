import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { createPokemon, modifyPokemon } from '../hooks/usePokemonData';

/**
 * Pokemon Add/Edit Modal
 */
function ModalPokemonAdd({
    onHandleClosePokemon,
    addPokemon,
    onAlertCreate,
    pokemons,
    editPokemon = {},
}) {
    const [state, setState] = useState({
        id: '',
        name: '',
        image: '',
        height: '',
        weight: '',
        type: '',
        mainType: '',
        maxCp: 0,
        attack: 0,
        defense: 0,
        stamina: 0,
        hp: 0,
    });
    const [modalMode, setModalMode] = useState({
        title: 'Add Pokemon',
        edit: false,
    });
    const [dialog, setDialog] = useState(false);

    /**
     * Add or Edit a pokemon on form submit
     * @param event on submit event */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (modalMode.edit) {
            modifyPokemon(state).then((data) => onAlertCreate(data.message));
        } else {
            createPokemon(state).then((data) => onAlertCreate(data.message));
        }
        setDialog(!dialog);
        pokemons(state);
        onHandleClosePokemon();
    };

    /** Set the default form values */
    useEffect(() => {
        if (editPokemon.data) {
            const data = editPokemon.data;
            setState({
                ...state,
                id: data.id,
                name: data.name,
                image: data.url,
                height: data.height,
                weight: data.weight,
                type: data.type,
                mainType: data.mainType,
                maxCp: data.maxCp,
                attack: data.attack,
                defense: data.defense,
                stamina: data.stamina,
                hp: data.hp,
            });
            setModalMode({
                title: 'Edit Pokemon',
                edit: true,
            });
        } else {
            setModalMode({
                title: 'Add Pokemon',
                edit: false,
            });
        }
    }, []);

    return (
        <Modal
            open={addPokemon}
            onClose={onHandleClosePokemon}
            className='modal-pokemon'
            id='modal-pokemon-add'
            aria-modal='true'
            aria-labelledby='modal-title'
        >
            <Box className='modal-pokemon__content'>
                <div className='modal-pokemon__header mb-3'>
                    <h2
                        className='modal-pokemon__title heading-2'
                        id='modal-title'
                    >
                        {modalMode.title}
                    </h2>
                </div>
                <div className='modal-pokemon__body'>
                    <form
                        action=''
                        id='add-pokemon'
                        className='form'
                        onSubmit={handleSubmit}
                    >
                        <div className='modal-pokemon__group'>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='Pokemon Number'
                                    required
                                    name='pokemon_pokedex_id'
                                    id='pokemon_pokedex_id'
                                    value={state.id}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            id: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    className='form__label'
                                    htmlFor='pokemon_pokedex_id'
                                >
                                    Pokedex Number
                                </label>
                            </div>
                            <div className='form__group modal-pokemon__cols2-5'>
                                <input
                                    type='text'
                                    className='form__input'
                                    placeholder='Pokemon Name'
                                    required
                                    name='pokemon_name'
                                    id='pokemon_name'
                                    value={state.name}
                                    maxLength={25}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            name: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_name'
                                    className='form__label'
                                >
                                    Pokemon Name
                                </label>
                            </div>
                        </div>
                        <div className='modal-pokemon__group'>
                            <div className='form__group'>
                                <input
                                    type='text'
                                    className='form__input'
                                    placeholder='Pokemon Weight'
                                    required
                                    name='pokemon_weight'
                                    id='pokemon_weight'
                                    value={state.weight}
                                    maxLength={25}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            weight: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_weight'
                                    className='form__label'
                                >
                                    Pokemon Weight
                                </label>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='text'
                                    className='form__input'
                                    placeholder='Pokemon Height'
                                    required
                                    name='pokemon_height'
                                    id='pokemon_height'
                                    value={state.height}
                                    maxLength={25}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            height: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_height'
                                    className='form__label'
                                >
                                    Pokemon Height
                                </label>
                            </div>
                            <div className='form__group modal-pokemon__cols3-5'>
                                <select
                                    name='pokemon_main_type'
                                    id='pokemon_main_type'
                                    required
                                    className='form__select'
                                    value={state.mainType}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            mainType: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                >
                                    <option value='' disabled defaultValue>
                                        Pokemon Main Type
                                    </option>
                                    <option value='Bug'>Bug</option>
                                    <option value='Dark'>Dark</option>
                                    <option value='Dragon'>Dragon</option>
                                    <option value='Electric'>Electric</option>
                                    <option value='Fairy'>Fairy</option>
                                    <option value='Fighting'>Fighting</option>
                                    <option value='Fire'>Fire</option>
                                    <option value='Flying'>Flying</option>
                                    <option value='Ghost'>Ghost</option>
                                    <option value='Grass'>Grass</option>
                                    <option value='Ground'>Ground</option>
                                    <option value='Ice'>Ice</option>
                                    <option value='Normal'>Normal</option>
                                    <option value='Poison'>Poison</option>
                                    <option value='Psychic'>Psychic</option>
                                    <option value='Rock'>Rock</option>
                                    <option value='Steel'>Steel</option>
                                    <option value='Water'>Water</option>
                                </select>
                            </div>
                        </div>
                        <div className='modal-pokemon__group'>
                            <div className='form__group'>
                                <select
                                    name='pokemon_type'
                                    id='pokemon_type'
                                    required
                                    className='form__select'
                                    value={state.type}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            type: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                >
                                    <option value='' defaultValue>
                                        Pokemon Type
                                    </option>
                                    <option value='Bug'>Bug</option>
                                    <option value='Dark'>Dark</option>
                                    <option value='Dragon'>Dragon</option>
                                    <option value='Electric'>Electric</option>
                                    <option value='Fairy'>Fairy</option>
                                    <option value='Fighting'>Fighting</option>
                                    <option value='Fire'>Fire</option>
                                    <option value='Flying'>Flying</option>
                                    <option value='Ghost'>Ghost</option>
                                    <option value='Grass'>Grass</option>
                                    <option value='Ground'>Ground</option>
                                    <option value='Ice'>Ice</option>
                                    <option value='Normal'>Normal</option>
                                    <option value='Poison'>Poison</option>
                                    <option value='Psychic'>Psychic</option>
                                    <option value='Rock'>Rock</option>
                                    <option value='Steel'>Steel</option>
                                    <option value='Water'>Water</option>
                                </select>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='Max Cp'
                                    required
                                    name='pokemon_max_cp'
                                    id='pokemon_max_cp'
                                    value={state.maxCp}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            maxCp: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_max_cp'
                                    className='form__label'
                                >
                                    Max Cp
                                </label>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='Attack'
                                    required
                                    name='pokemon_attack'
                                    id='pokemon_attack'
                                    value={state.attack}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            attack: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_attack'
                                    className='form__label'
                                >
                                    Attack
                                </label>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='Defense'
                                    required
                                    name='pokemon_defense'
                                    id='pokemon_defense'
                                    value={state.defense}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            defense: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_defense'
                                    className='form__label'
                                >
                                    Defense
                                </label>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='Stamina'
                                    required
                                    name='pokemon_stamina'
                                    id='pokemon_stamina'
                                    value={state.stamina}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            stamina: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_stamina'
                                    className='form__label'
                                >
                                    Stamina
                                </label>
                            </div>
                            <div className='form__group'>
                                <input
                                    type='number'
                                    className='form__input'
                                    placeholder='HP'
                                    required
                                    name='pokemon_hp'
                                    id='pokemon_hp'
                                    value={state.hp}
                                    max='999'
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            hp: e.target.value.replace(
                                                /(<([^>]+)>)/gi,
                                                ''
                                            ),
                                        })
                                    }
                                />
                                <label
                                    htmlFor='pokemon_hp'
                                    className='form__label'
                                >
                                    HP
                                </label>
                            </div>
                        </div>
                        <div className='form__group'>
                            <input
                                type='text'
                                className='form__input'
                                placeholder='URL Image'
                                required
                                name='pokemon_image'
                                id='pokemon_image'
                                value={state.image}
                                maxLength={100}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        image: e.target.value.replace(
                                            /(<([^>]+)>)/gi,
                                            ''
                                        ),
                                    })
                                }
                            />
                            <label
                                htmlFor='pokemon_image'
                                className='form__label'
                            >
                                URL Image
                            </label>
                        </div>
                        <div className='form__group form__group--btn'>
                            <button
                                className='btn btn--primary modal-pokemon__btn'
                                name='Send'
                                type='submit'
                            >
                                Save
                            </button>
                            <button
                                className='btn btn--outline modal-pokemon__btn'
                                id='close-modal-pokemon-add'
                                name='Cancel'
                                type='button'
                                onClick={onHandleClosePokemon}
                            >
                                {' '}
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalPokemonAdd;

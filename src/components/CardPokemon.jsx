import React, { useState } from 'react';
import ModalStatsPokemon from './ModalStatsPokemon';
import { deletePokemon } from '../hooks/usePokemonData';

function CardPokemon({
    mainType,
    id,
    url,
    name,
    weight,
    height,
    type,
    maxCp,
    defense,
    attack,
    stamina,
    hp,
    pokemons,
    editPokemon,
}) {
    let [modalState, setModalState] = useState(false);
    /** Function to handle close modal pokemon */
    const handleCloseModal = () => {
        setModalState(false);
    };
    /** Function to handle open modal pokemon */
    const handleOpenModal = () => {
        setModalState(true);
    };
    /** Function to handle delete pokemon card
     * @param id id of the pokemon
     */
    const handleDelete = (id) => {
        deletePokemon(id);
        pokemons(id);
    };
    /**
     * Function to handle edit pokemon card
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
     *           hp: number;}} data Pokemon data
     */

    const handleEdit = (data) => {
        editPokemon(data);
        setModalState(false);
    };
    return (
        <article className='card-pokedex' id={`pokedex-article-${id}`}>
            <div>
                <div className='card-pokedex__header' onClick={handleOpenModal}>
                    <span
                        className='card-pokedex__number'
                        aria-roledescription='number-pokedex'
                    >
                        <span aria-hidden='true'>#</span>
                        {('0' + id).slice(-3)}
                    </span>
                    <span
                        className={`card-pokedex__type card-pokedex__type--${mainType}`}
                        aria-label={mainType}
                    ></span>
                </div>
                <figure
                    className={`card-pokedex__img card-pokedex__img--${mainType}`}
                    onClick={handleOpenModal}
                >
                    <span aria-hidden='true'></span>
                    <img src={url} alt={`image_pokedex_${name}`} />
                </figure>
                <div className='card-pokedex__body' onClick={handleOpenModal}>
                    <h2 className='heading-2 card-pokemon__name'>{name}</h2>
                    <p className='card-pokedex__wight' id={`weight-${id}`}>
                        Weight
                    </p>
                    <p className='card-pokedex__height' id={`height-${id}`}>
                        Height
                    </p>
                    <p
                        className='card-pokedex__wight-number'
                        aria-describedby={`weight-${id}`}
                    >
                        {weight}
                    </p>
                    <p
                        className='card-pokedex__height-number'
                        aria-describedby={`height-${id}`}
                    >
                        {height}
                    </p>
                </div>
                <div className='card-pokedex__footer'>
                    <button
                        className='btn btn--circular btn-edit'
                        id={`pokedex-edit${id}`}
                        type='button'
                        onClick={() =>
                            handleEdit({
                                key: id,
                                id: id,
                                mainType: mainType,
                                url: url,
                                name: name,
                                weight: weight,
                                height: height,
                                type: type,
                                maxCp: maxCp,
                                stamina: stamina,
                                hp: hp,
                                attack: attack,
                                defense: defense,
                            })
                        }
                        aria-label={`Edit ${name}`}
                    >
                        <svg className='btn-edit__icon' aria-hidden='true'>
                            <use xlinkHref='/assets/images/sprite.svg#icon-edit-pencil'></use>
                        </svg>
                    </button>
                    <p className='card-pokedex__description-type'>
                        Type:{' '}
                        <span>
                            {type === mainType
                                ? mainType
                                : mainType + ' / ' + type}
                        </span>
                    </p>
                    <button
                        className='btn btn--circular btn-delete'
                        id={`pokedex-delete-${id}`}
                        type='button'
                        onClick={() => handleDelete(id)}
                        aria-label={`Delete ${name}`}
                    >
                        <svg className='btn-delete__icon' aria-hidden='true'>
                            <use xlinkHref='/assets/images/sprite.svg#icon-delete'></use>
                        </svg>
                    </button>
                </div>
            </div>
            {modalState && (
                <ModalStatsPokemon
                    key={id}
                    id={id}
                    mainType={mainType}
                    url={url}
                    name={name}
                    weight={weight}
                    height={height}
                    type={type}
                    maxCp={maxCp}
                    stamina={stamina}
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    onHandleOpen={modalState}
                    onHandleClose={handleCloseModal}
                />
            )}
        </article>
    );
}

export default CardPokemon;

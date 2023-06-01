import React from 'react';
import PokedexStat from './PokedexStat';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
function ModalStatsPokemon({
    mainType,
    id,
    name,
    type,
    weight,
    height,
    url,
    maxCp,
    attack,
    defense,
    stamina,
    hp,
    onHandleOpen,
    onHandleClose,
}) {
    return (
        <Modal
            className='modal-pokedex'
            open={onHandleOpen}
            onClose={onHandleClose}
        >
            <Box className='modal-pokedex__content'>
                <div className='modal-pokedex__header'>
                    <span
                        id='number-pokedex'
                        className='card-pokedex__number-pokedex'
                        aria-hidden='true'
                    >
                        Number Pokedex
                    </span>
                    <span aria-hidden>#</span>
                    <span
                        className='card-pokedex__number'
                        aria-describedby='number-pokedex'
                    >
                        {('0' + id).slice(-3)}
                    </span>
                    <span
                        className={`card-pokedex__type card-pokedex__type--${mainType}`}
                        aria-label={mainType}
                    ></span>
                </div>
                <h2 className='modal-pokedex__title heading-2'>{name}</h2>
                <div className='modal-pokedex__body'>
                    <div className={`modal-pokedex__weight`}>
                        <p
                            className='paragraph modal-pokedex__title-header modal-pokedex__paragraph'
                            id='weight2'
                        >
                            Weight
                        </p>
                        <p
                            className='paragraph modal-pokedex__description-header modal-pokedex__paragraph'
                            aria-describedby='weight2'
                        >
                            {weight}
                        </p>
                    </div>
                    <figure
                        className={`modal-pokedex__img modal-pokedex__img--${mainType}`}
                    >
                        <img src={url} alt={`image_pokedex_${name}`} />
                    </figure>
                    <div className={`modal-pokedex__height`}>
                        <p
                            className='paragraph modal-pokedex__title-header modal-pokedex__paragraph'
                            id='height2'
                        >
                            Height
                        </p>
                        <p
                            className='paragraph modal-pokedex__description-header modal-pokedex__paragraph'
                            aria-describedby='height2'
                        >
                            {height}
                        </p>
                    </div>
                </div>
                <div className='modal-pokedex__stats'>
                    <PokedexStat title='Max cp' number={maxCp} />
                    <PokedexStat title='Attack' number={attack} />
                    <PokedexStat title='Defense' number={defense} />
                    <PokedexStat title='Stamina' number={stamina} />
                    <PokedexStat title='Hp' number={hp} />
                </div>
                <div className='modal-pokedex__footer'>
                    <button
                        className='btn btn--outline'
                        id='close-modal-pokedex'
                        name='close'
                        type='button'
                        onClick={onHandleClose}
                    >
                        Close
                    </button>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalStatsPokemon;

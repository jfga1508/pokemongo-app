import React from 'react';

function PokedexStat({ title, number }) {
    return (
        <div className='modal-pokedex__stat'>
            <span className='modal-pokedex__title-stat'>{title}</span>
            <span className='modal-pokedex__number-stat'>{number}</span>
            <div className='modal-pokedex__chart-stat' aria-hidden='true'>
                <span
                    className='modal-pokedex__number-chart-stat'
                    style={{ width: `${number / 10}rem` }}
                    aria-hidden='true'
                ></span>
            </div>
        </div>
    );
}

export default PokedexStat;

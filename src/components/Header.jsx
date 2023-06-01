import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [search, setSearch] = useState('');

    const nav = document.getElementById('menu');

    /** Function to add menu on mobile */
    function addMenu() {
        nav.classList.toggle('show-menu');
    }
    /** Function to quit menu on mobile */
    function quitMenu() {
        nav.classList.toggle('show-menu');
    }

    /** Search pokemon by url segment
     * @param event on submit event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const URL = `/Pokedex/${search}`;
        window.location.href = URL;
    };

    return (
        <header className='header'>
            <Link className='header__logo' to='/'>
                <picture>
                    <img src='/assets/images/logo.png' alt='Logo_Image' />
                </picture>
            </Link>
            <button
                onClick={addMenu}
                className='header__btn-menu'
                id='menu-button'
                type='submit'
                aria-label='Button menu'
            >
                <span
                    className='header__icon-search'
                    arial-hidden='true'
                ></span>
            </button>
            <button
                className='header__btn-search'
                id='search-button'
                type='submit'
                aria-label='Button search'
            >
                <img
                    className='header__icon-search'
                    src='/assets/images/sprite.svg'
                    alt='icon-search'
                    aria-hidden='true'
                />
            </button>
            <form
                action='/Pokedex'
                className='header__search search'
                id='search-form'
                onSubmit={handleSubmit}
            >
                <button
                    className='search__button'
                    type='submit'
                    aria-label='search'
                    tabIndex={-1}
                >
                    <svg className='search__icon' aria-hidden='true'>
                        <use xlinkHref='/assets/images/sprite.svg#icon-search'></use>
                    </svg>
                </button>
                <input
                    type='search'
                    name='key'
                    className='search__input'
                    placeholder='Search a Pokemon'
                    aria-label='Input search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <nav
                className='header__user-nav user-nave'
                id='menu'
                aria-label='Navigation page'
            >
                <ul onClick={quitMenu} className='user-nav__list'>
                    <li className='user-nav__item'>
                        <Link to='/Pokedex'>Pokedex</Link>
                    </li>
                    <li className='user-nav__item'>
                        <a href='/#team-valor'>Team Valor</a>
                    </li>
                    <li className='user-nav__item'>
                        <a href='/#team-mystic'>Team Mystic</a>
                    </li>
                    <li className='user-nav__item'>
                        <a href='/#team-instinct'>Team Instinct</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

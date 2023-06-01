import { Helmet } from 'react-helmet';
import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalContact from '../components/ModalContact';
import Context from '../context/context';

/**
 * Home Page
 */
function Home() {
    const ctx = useContext(Context);
    return (
        <>
            <Helmet>
                <title>Pokemon GO</title>
                <meta
                    name='description'
                    content='Pokémon GO TGA Poject, for pokémon go cards and stats'
                />
                <meta property='og:title' content='Pokémon GO' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Pokémon GO TGA Poject, for pokémon go cards and stats'
                />
                <meta property='og:url' content='URL-TO-SITE' />
                <meta
                    property='og:image'
                    content='URL-TO-PAGE-PREVIEW-IMAGE-OR-POKEMON'
                />
                <meta name='twitter:title' content='Pokémon GO' />
                <meta
                    name='twitter:description'
                    content='Pokémon GO TGA Poject, for pokémon go cards and stats'
                />
                <meta
                    name='twitter:image'
                    content='URL-TO-PAGE-PREVIEW-IMAGE-OR-POKEMON'
                />
                <meta name='twitter:card' content='summary_large_image' />
            </Helmet>
            <Header />
            <main>
                <section className='section section--header'>
                    <h1 className='heading-1 section__title'>
                        POKEMON GO MORE THAN A SIMPLE GAME
                    </h1>
                    <p className='paragraph section__description'>
                        Here you can know more about this amazing experience
                        named Pokemon GO.
                    </p>
                    <figure className='section__img'>
                        <img
                            src='/assets/images/logotipo.png'
                            alt='Logo_Pokemon_go'
                        />
                    </figure>
                </section>
                <section className='section section--light' id='team-valor'>
                    <figure className='section__img'>
                        <img
                            src='/assets/images/team-valor.png'
                            alt='Logo_team_valor'
                        />
                    </figure>
                    <h2 className='heading-2 section__title'>TEAM VALOR</h2>
                    <p className='paragraph section__description'>
                        Is a heroic faction in Pokémon GO. It's one of the three
                        available teams that the player can pick to be a member
                        of. Team Valor's leader is the passionate Candela.
                    </p>
                </section>
                <section className='section section--dark' id='team-mystic'>
                    <h2 className='heading-2 section__title'>TEAM MYSTIC</h2>
                    <p className='paragraph section__description'>
                        Is a heroic faction in Pokémon GO. It's one of the three
                        available teams the player can pick to be a member of.
                        Team Mystic's leader is the analytical Blanche.
                    </p>
                    <figure className='section__img'>
                        <img
                            src='/assets/images/team-mystic.png'
                            alt='Logo_team_mystic'
                        />
                    </figure>
                </section>
                <section className='section section--light' id='team-instinct'>
                    <figure className='section__img'>
                        <img
                            src='/assets/images/team-instinct.png'
                            alt='Logo_team_instinct'
                        />
                    </figure>
                    <h2 className='heading-2 section__title'>TEAM INSTINCT</h2>
                    <p className='paragraph section__description'>
                        Is a heroic faction in Pokémon GO. It's one of the three
                        available teams that the player can pick to be a member
                        of. Team Instinct's leader is the positive Spark.
                    </p>
                </section>
                <section
                    className='section section-contact-us section--dark'
                    id='contact-us'
                >
                    <figure className='section__img'>
                        <span></span>
                        <img
                            src='/assets/images/center-pokemon.png'
                            alt='Logo_Pokemon_Center'
                        />
                    </figure>
                    <button
                        className='btn btn--gradient section__btn'
                        id='btn-modal'
                        data-modal='contact-modal'
                        onClick={ctx.onHandleOpen}
                    >
                        Contact us
                    </button>
                </section>
            </main>
            <Footer />
            {ctx.contact && <ModalContact />}
        </>
    );
}

export default Home;

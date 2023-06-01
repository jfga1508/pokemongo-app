import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <picture className='footer__logo'>
                <img src='/assets/images/logo.png' alt='Logo_image' />
            </picture>
            <p className='paragraph footer__paragraph'>
                | Built by Diego Torres, Jean Gonzales and Kevin Marín for Top
                Gun Academy in PGD. Copyright{' '}
                <span aria-hidden='true'>| Diego Torres and Jean Gonzales</span>
            </p>
        </footer>
    );
}

export default Footer;

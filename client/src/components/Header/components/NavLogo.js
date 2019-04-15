import React from 'react';
import Media from 'react-responsive';

const fCClogo = '../img/logo.svg';
const fCCglyph = '../img/logo.svg';

function NavLogo() {
  return (
    <Media query='(min-width: 735px)'>
      {matches =>
        matches ? (
          <img
            alt='learn to code at freeCodeCamp logo'
            className='nav-logo logo'
            src={fCClogo}
          />
        ) : (
          <img
            alt='learn to code at freeCodeCamp logo'
            className='nav-logo logo-glyph'
            src={fCCglyph}
          />
        )
      }
    </Media>
  );
}

NavLogo.displayName = 'NavLogo';

export default NavLogo;

import React from 'react';
import Menu from './Menu';
  //import Cart from './cart';
import './header.css';

const Header = () => {
  return (
    <div className='app-header'>
      <Menu />
      {/* <Cart/> */}
    </div>
  );
};

export default Header;

import React from 'react';
import styles from '../styles/components/Header.scss';
import searchIcon from '../../public/assets/icon-search-white.svg';
import logo from '../../public/assets/logo-autosales.svg';

export default class Header extends React.Component {
  render() {
    const navLinks = ['Cars for Sale', 'Sell My Car', 'Find a Dealer', 'Contact Us'];

    /*
      Here we're creating <li> elements for each link in the navLinks array above.
      If we ever want to add new links, simply pushing them to navLinks will automatically render them to the page.
    */
    const navElements = navLinks.map((link) => {
      const navLink = <li key={navLinks.indexOf(link)}><a href='#'>{ link } </a></li>;
      return navLink;
    });

    return (
      <nav className='navbar'>
        <div className='navbar-autosales'>
          <img src={ logo } className='logo'/>
          <p className='brand'>AutoSales.com</p>
        </div>
        <div className='menu'>
          <ul className='navbar-links-container'>
            { navElements }
            <img src={ searchIcon } className='search-icon' />
          </ul>
        </div>
        <a className='toggle-nav' href='#'>&#9776;</a>
      </nav>
    );
  }
}

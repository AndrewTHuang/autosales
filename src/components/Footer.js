import React from 'react';
import styles from '../styles/components/Footer.scss';
import searchIcon from '../../public/assets/icon-search-white.svg';
import logo from '../../public/assets/logo-autosales.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='footer-brand'>
          <img src={ logo } className='logo'/>
          <p className='brand'>AutoSales.com</p>
        </div>
        <div className='legal'>
          <p>Copyright © 2016 AutoSales.com | All rights reserved | Privacy Policy</p>
        </div>
      </div>
    );
  }
}

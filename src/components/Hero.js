import React from 'react';
import styles from '../styles/components/Hero.scss';
import heroImage from '../../public/assets/hero-image.jpg';
import Button from './Button';

export default class Hero extends React.Component {
  render() {
    const heroText = 'The Car of Your Dreams is Only a Click Away!';

    return (
      <div className='hero-container'>
        <div className='hero-image'>
          <p className='hero-text'> { heroText } </p>
          <Button className='hero-button' text='Get Started Now' />
        </div>
      </div>
    );
  }
}

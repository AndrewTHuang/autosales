import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import Content from './components/Content';
import Footer from './components/Footer';
import styles from './styles/base/_colors.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='body'>
          <Hero />
          <Search />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

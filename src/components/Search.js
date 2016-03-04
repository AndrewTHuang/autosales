import React from 'react';
import styles from '../styles/components/Search.scss';
import Button from './Button';

export default class Search extends React.Component {
  render() {
    const dropdownCategories = ['Make', 'Model', 'Price'];

    /*
      Here we are mapping all of the elements in the dropdownCategories array above into HTML chunks.
      If we ever want to add new dropdowns, simply pushing them inot dropdownCategories will render them to the page.
    */

    const options = dropdownCategories.map((text) => {
      const title =
        <div key={dropdownCategories.indexOf(text)} className='dropdown'>
          <Button className='dropdown-menu' text={text} />
          <div className='dropdown-content'>
            <a href='#'> Option 1 </a>
            <a href='#'> Option 2 </a>
            <a href='#'> Option 3 </a>
          </div>
        </div>;

      return title;
    });

    return (
      <div className='search-container'>
        { options }
        <Button className='search-button' text='Find My Dream Car' />
      </div>
    );
  }
}

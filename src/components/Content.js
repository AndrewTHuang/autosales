import React from 'react';
import styles from '../styles/components/Content.scss';
import Button from './Button';

import hondaCivic from '../../public/assets/honda-civic.png';
import hondaCrv from '../../public/assets/honda-crv.png';
import audiRs6 from '../../public/assets/audi-rs6.png';
import audiQ7 from '../../public/assets/audi-q7.png';
import chevyCamaro from '../../public/assets/chevy-camaro.png';
import chevyEscape from '../../public/assets/chevy-escape.png';
import fordShelby from '../../public/assets/ford-shelby.png';
import fordF150 from '../../public/assets/ford-f150.png';

export default class Content extends React.Component {
  render() {

    // This is an array of data that will be used to auto-generate blocks of content containing the make, decription and photos.
    const carData = [
      {
        'Honda Cars and SUVs':
        [
          'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
          [hondaCivic, 'Honda Civic'],
          [hondaCrv, 'Honda CRV']
        ]
      },
      {
        'Audi Cars and SUVs':
        [
          'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
           [audiRs6, 'Audi RS6'],
           [audiQ7, 'Audi Q7']
         ]
     },
      {
        'Chevy Cars, Trucks, and SUVs':
        [
          'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
          [chevyCamaro, 'Chevy Camaro'],
          [chevyEscape, 'Chevy Escape']
        ]
      },
      {
        'Ford Cars, Trucks, and SUVs':
        [
          'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
          [fordShelby, 'Ford Shelby'],
          [fordF150, 'Ford F-150']
        ]
      }
    ];

    /*
      Here we convert data from the carData array above into blocks of content on the page.
      If new content ever needs to be displayed, you can simply add a new object to the carData array and it will automatically be rendered to the page.
    */

    const block = carData.map((carObj) => {
      let carBlock;
      const currentCarTitle = Object.keys(carObj);  // Header of each block  i.e. 'Honda Cars and SUVs'
      const carDataArray = carObj[currentCarTitle]; // Array containing description, images, and models

      // One half of a block. This chunk contains the make and description.
      const contentText =
        <div className='content-text-container'>
          <p className='content-title'> { currentCarTitle } </p>
          <p className='content-description'> { carDataArray[0] } </p>
          <Button className='content-button' text='View All' />
        </div>;

      // overlayLeft and overlayRight repeat a lot of code. Please see Andrew_Huang_Debriefing.pdf for an explanation.
      const overlayLeft =
        <div className='overlay'>
          <p className='overlay-car-name'>
            { carDataArray[1][1] }
            <p className='overlay-line'>_____________________</p>
            <p className='overlay-learn'>Learn More</p>
          </p>
        </div>;

      const overlayRight =
        <div className='overlay'>
          <p className='overlay-car-name'>
            { carDataArray[2][1] }
            <p className='overlay-line'>_____________________</p>
            <p className='overlay-learn'>Learn More</p>
          </p>
        </div>;

      // The other half of a block. This chunk contains the two photos for each make.
      const contentPhotos =
        <div className='content-photos-container'>
          <div className='car-photo'>
            <img src={ carDataArray[1][0] } />
            { overlayLeft }
          </div>
          <div className='car-photo'>
            <img src={ carDataArray[2][0] } />
            { overlayRight }
          </div>
        </div>;

      // Here lies the logic to alternate left/right orientation and background shading for each block.
      carData.indexOf(carObj) % 2 === 0 ?
        carBlock =
          <div key={carData.indexOf(carObj)} className='content-block odd-row'>
            { contentText }
            { contentPhotos }
          </div>
        :
        carBlock =
          <div key={carData.indexOf(carObj)} className='content-block'>
            { contentPhotos }
            { contentText }
          </div>

      return carBlock;
    });

    return (
      <div>
        { block }
      </div>
    );
  }
}

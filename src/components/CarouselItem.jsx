import React from 'react';
import PropType from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentReating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentReating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propType = {
  cover: PropType.string,
  title: PropType.string,
  year: PropType.number,
  contentReating: PropType.string,
  duration: PropType.string,
};

export default CarouselItem;
